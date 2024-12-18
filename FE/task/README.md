# React + Flask Task Planner

This project is a task planner application built with React for the frontend and Flask for the backend. It allows users to manage tasks with features for creating, reading, updating, and deleting tasks.

## Project Structure

```
task-planner
├── BE
│   ├── app.py                # Main entry point for the Flask application
│   ├── db
│   │   ├── __init__.py       # Marks the db directory as a Python package
│   │   ├── models.py         # Defines data models using SQLAlchemy
│   │   └── db.py             # Contains database connection logic
│   ├── .env                  # Environment variables for the backend
│   ├── .gitignore            # Files to ignore in Git for the backend
│   └── requirements.txt      # Python dependencies for the backend
├── FE
│   └── task
│       ├── .env              # Environment variables for the frontend
│       ├── .gitignore        # Files to ignore in Git for the frontend
│       ├── eslint.config.js   # ESLint configuration for the frontend
│       ├── index.html        # Main HTML file for the frontend application
│       ├── package.json      # Configuration file for npm
│       ├── public            # Directory for static assets
│       ├── README.md         # Documentation for the frontend project
│       ├── src
│       │   ├── App.css       # CSS styles for the App component
│       │   ├── App.jsx       # Main React component
│       │   ├── assets        # Directory for static assets
│       │   ├── Components
│       │   │   ├── DataGridDemo.jsx # DataGrid component for displaying tasks
│       │   │   └── Form.jsx  # Form component for adding/editing tasks
│       │   ├── hooks
│       │   │   └── useFetch.jsx # Custom hook for fetching data
│       │   ├── Icons
│       │   │   └── PlusIcon.jsx # Icon component used in the UI
│       │   ├── index.css     # Global CSS styles
│       │   └── main.jsx      # Entry point for the React application
│       └── vite.config.js    # Configuration for Vite
└── README.md                 # Overall project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed for the frontend
- Python and pip installed for the backend
- MongoDB or any other database configured for the backend

### Backend Setup

1. Navigate to the `BE` directory.
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```
4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

5. Set up your environment variables in the `.env` file.

6. Run the Flask application:
   ```
   python app.py
   ```

### Frontend Setup

1. Navigate to the `FE/task` directory.
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the interface to manage tasks, including adding, editing, and deleting tasks.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.