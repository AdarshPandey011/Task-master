import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function Form({ open, onClose, fetchData, selectedRow }) {
  const [formData, setFormData] = useState({
    entityname: '',
    tasktype: '',
    date: '',
    phone: '',
    contactperson: '',
    notes: '',
    status: 'open',
  });

  useEffect(() => {
    if (selectedRow) {
      setFormData({
        entityname: selectedRow.entityname || '',
        tasktype: selectedRow.tasktype || '',
        date: selectedRow.date || '',
        phone: selectedRow.phone || '',
        contactperson: selectedRow.contactperson || '',
        notes: selectedRow.notes || '',
        status: selectedRow.status || 'open',
      });
    }
  }, [selectedRow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (selectedRow) {
      await axios.put(`${API_BASE_URL}/tasks/${selectedRow.id}`, formData);
    } else {
      await axios.post(`${API_BASE_URL}/add`, formData);
    }
    fetchData();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{selectedRow ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              name="entityname"
              label="Entity Name"
              type="text"
              fullWidth
              value={formData.entityname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Task Type</InputLabel>
              <Select
                name="tasktype"
                value={formData.tasktype}
                onChange={handleChange}
                label="Task Type"
              >
                <MenuItem value="call">call</MenuItem>
                <MenuItem value="meeting">meeting</MenuItem>
                <MenuItem value="video call">video call</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              name="date"
              label="Date"
              type="date"
              fullWidth
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              name="phone"
              label="Phone"
              type="text"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              name="contactperson"
              label="Contact Person"
              type="text"
              fullWidth
              value={formData.contactperson}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              name="notes"
              label="Notes"
              type="text"
              fullWidth
              value={formData.notes}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="status"
              label="Status"
              type="text"
              fullWidth
              value={formData.status}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{selectedRow ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
}