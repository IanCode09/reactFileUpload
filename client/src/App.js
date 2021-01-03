import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import FileUpload from './Components/FileUpload'
import FormProfile from './Components/FormProfile';
import Users from './Components/Users';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react" /> React File Upload
        </h4>

        <Route path='/' component={FileUpload} exact />
        <Route path='/signup' component={FormProfile} />
        <Route path='/users' component={Users} />
      </div>

    </Router>
  );
}

export default App;
