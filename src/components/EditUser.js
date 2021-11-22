/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
const EditUser = (props) => {

    let navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getData();
        }
    }, [])

    // state mangmt. for the editing values and to be submitted
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [degree, setDegree] = useState("")
    const [department, setDepartment] = useState("")

    // loading the values for the data to be edited
    const getData = async () => {
        await fetch('https://614eac09b4f6d30017b482e5.mockapi.io/users/' + params.id)
            .then(res => res.json())
            .then(res => {
                setName(res.name);
                setEmail(res.email);
                setMobile(res.mobile);
                setDegree(res.degree);
                setDepartment(res.department);
            }
            )

    };

    // saving edited data
    let handleSave = async (event) => {
        event.preventDefault();
        await fetch('https://614eac09b4f6d30017b482e5.mockapi.io/users/' + params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, mobile, degree, department
            })
        }).then(res => {
        })
        navigate("/users");
    }
    return (
        <div className='container'>
            <form>
                <h1>Edit User</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" value={name || ''} className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={email || ''} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mobile</label>
                    <input type="text" value={mobile || ''} className="form-control" onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Degree</label>
                    <input type="text" value={degree || ''} className="form-control" onChange={(e) => setDegree(e.target.value)} placeholder="Degree" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Department</label>
                    <input type="text" value={department || ''} className="form-control" onChange={(e) => setDepartment(e.target.value)} placeholder="Department" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
            </form>
        </div>
    )
}

export default EditUser
