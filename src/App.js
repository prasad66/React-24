import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddUser';
import EditStudent from './components/EditUser';
import AllStudents from './components/AllUsers';


function App() {


  const data1 = { earning: "10,000", annual: "215,000", tasks: "40", pending: "12" }
  return (
    <Router>
      <div style={{ display: "flex", gridTemplateColumns: "15% 85%" }}>
        <div>
          <SideBar />
        </div>
        <div className="w-100">
          <Routes>  
            <Route path='/dashboard' element={<Dashboard value={data1} />} />
            <Route path='/create-user' element={<AddStudent />} />
            <Route path='/edit-user/:id' element={<EditStudent />} />
            <Route path='/users' element={<AllStudents />} />
            <Route path='/' element={<Dashboard value={data1} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
