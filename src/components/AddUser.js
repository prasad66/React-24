import React, { useState } from 'react'
import { useNavigate } from 'react-router';
const AddUser = (props) => {

    let navigate = useNavigate();

    // state mangmt for the new values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [degree, setDegree] = useState("")
    const [department, setDepartment] = useState("")

    // adding the new user
    let handleSave = async (event) => {
        event.preventDefault();
        await fetch('https://614eac09b4f6d30017b482e5.mockapi.io/users/', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                degree: degree,
                department: department,
                mobile: mobile,
                email: email
            })
        });
        navigate("/users");
    }
    return (
        <div className='container'>
            <form>
                <h1>Add user</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" onChange={(event => setName(event.target.value))} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" onChange={(event => setEmail(event.target.value))} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
                    <input type="number" onChange={(event => setMobile(event.target.value))} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Degree</label>
                    <input type="text" onChange={(event => setDegree(event.target.value))} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Department</label>
                    <input type="text" onChange={(event => setDepartment(event.target.value))} className="form-control" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
            </form>
        </div>
    )
}

export default AddUser
