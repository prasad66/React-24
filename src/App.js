import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import AllStudents from './components/AllStudents';


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
            <Route path='/add-student' element={<AddStudent />} />
            <Route path='/edit-student/:id' element={<EditStudent />} />
            <Route path='/all-students' element={<AllStudents />} />
            <Route path='/' element={<Dashboard value={data1} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
