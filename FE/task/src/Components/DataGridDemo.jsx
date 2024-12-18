import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, MenuItem, Select, Typography, Paper } from '@mui/material';
import useFetch from '../hooks/useFetch';
import Form from './Form';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function DataGridDemo() {
  const columns = [
    { field: 'date', headerName: 'Date', width: 120 },
    {
      field: 'entityname',
      headerName: 'Entity Name',
      width: 150,
      align: 'left',
    },
    {
      field: 'tasktype',
      headerName: 'Task Type',
      width: 150,
      align: 'left',
    },
    {
      field: 'contactperson',
      headerName: 'Contact Person',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      align: 'left',
    },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 250,
      align: 'left',
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      align: 'left',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <Select
          value={selectValues[params.row.id] || ''}
          size="small"
          sx={{ width: '100%' }}
          onChange={(event) => handleAction(event.target.value, params.row, fetchData)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select
          </MenuItem>
          <MenuItem value="edit">Edit</MenuItem>
          <MenuItem value="delete">Delete</MenuItem>
          <MenuItem value="change_status">Change Status</MenuItem>
        </Select>
      ),
    },
  ];

  const [modal, setmodal] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const { data, loading, error, fetchData } = useFetch(`${API_BASE_URL}/tasks`);
  const [selectValues, setSelectValues] = React.useState({});

  const handleAction = async (action, row, fetchData) => {
    switch (action) {
      case 'edit':
        setSelectedRow(row);
        setmodal(true);
        break;
      case 'delete':
        alert('Are you sure you want to delete this task?');
        await axios.delete(`${API_BASE_URL}/tasks/${row.id}`);
        fetchData();
        break;
      case 'change_status':
        const newstatus = row.status === 'open' ? 'closed' : 'open';
        await axios.put(`${API_BASE_URL}/tasks/${row.id}`, {
          status: newstatus,
        });
        fetchData();
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
    setSelectValues((prev) => ({ ...prev, [row.id]: '' }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Task Planner
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          setmodal(true);
          setSelectedRow(null);
        }}
        sx={{ marginBottom: 2 }}
      >
        ADD
      </Button>

      {modal && <Form open={modal} onClose={() => setmodal(false)} fetchData={fetchData} selectedRow={selectedRow} />}
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Error: {error.message}</Typography>}

      <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <Box sx={{ height: 400, width: '100%' }}>
          {data && <DataGrid
            rows={data.map(row => ({ ...row, id: row._id }))}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />}
        </Box>
      </Paper>
    </Box>
  );
}