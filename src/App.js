import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import AllStudents from './components/AllStudents';
import Welcome from './components/Welcome'

function App() {

  // API CRUD
  // useEffect(()=>{
  //   getData();
  // },[]);

  // let getData=async ()=>{
  //   await fetch('https://614eac09b4f6d30017b482e5.mockapi.io/users/')
  //   .then(res=>res.json())
  //   .then(res=>setData(res))
  //   .then(console.log)
  // }

  const data1 = { earning: "10,000", annual: "215,000", tasks: "40", pending: "12" }
  // const [data, setData] = useState([
  //   {
  //     name: "Prasad N",
  //     degree: "B.E",
  //     department: "MECH",
  //     mobile: "7094634429",
  //     email: "ndpk.prasad@gmail.com"
  //   },
  //   {
  //     name: "Viji",
  //     degree: "B.E",
  //     department: "MECH",
  //     mobile: "8098373908",
  //     email: "viji98@gmail.com"
  //   },
  //   {
  //     name: "Thoya",
  //     degree: "B.E",
  //     department: "ECE",
  //     mobile: "8618684837",
  //     email: "thoyajakshipradeepkumar89@gmail.com"
  //   },

  // ]);
  return (
    <Router>
        <div style={{ display: "flex", gridTemplateColumns: "15% 85%" }}>
          <div>
            <SideBar />
          </div>
          <div className="w-100">
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/dashboard' element={<Dashboard value={data1} />} />
              <Route path='/add-student' element={<AddStudent />} />
              <Route path='/edit-student/:id' element={<EditStudent />} />
              <Route path='/all-students' element={<AllStudents />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
