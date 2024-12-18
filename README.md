# Task Planner Project

This project is a task management application built with a Flask backend and a React frontend. It allows users to create, read, update, and delete tasks.

## Project Structure

```
task-planner
├── BE
│   ├── app.py                # Main entry point for the Flask application
│   ├── db
│   │   ├── __init__.py       # Marks the db directory as a Python package
│   │   ├── models.py         # Defines data models using SQLAlchemy
│   │   └── db.py             # Contains database connection logic
│   ├── .env                  # Environment variables for the Flask app
│   ├── .gitignore             # Files and directories to ignore by Git
│   └── requirements.txt      # Python dependencies for the project
├── FE
│   └── task
│       ├── .env              # Environment variables for the frontend
│       ├── .gitignore         # Files and directories to ignore by Git for the frontend
│       ├── eslint.config.js   # ESLint configuration for the frontend
│       ├── index.html         # Main HTML file for the frontend application
│       ├── package.json       # Configuration file for npm
│       ├── public             # Directory for static assets
│       ├── README.md          # Documentation for the frontend project
│       ├── src
│       │   ├── App.css        # CSS styles for the App component
│       │   ├── App.jsx        # Main React component
│       │   ├── assets         # Directory for static assets like images or fonts
│       │   ├── Components
│       │   │   ├── DataGridDemo.jsx # DataGrid component for displaying tasks
│       │   │   └── Form.jsx   # Form component for adding or editing tasks
│       │   ├── hooks
│       │   │   └── useFetch.jsx # Custom hook for fetching data from the backend
│       │   ├── Icons
│       │   │   └── PlusIcon.jsx # Icon component used in the UI
│       │   ├── index.css      # Global CSS styles for the application
│       │   └── main.jsx       # Entry point for the React application
│       └── vite.config.js     # Configuration for Vite
└── README.md                  # Documentation for the overall project
```

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm

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
2. Install the frontend dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the interface to manage tasks, including adding, editing, and deleting tasks.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.