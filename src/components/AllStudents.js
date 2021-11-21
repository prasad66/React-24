import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

const AllStudents = () => {
    let apiUrl = "https://614eac09b4f6d30017b482e5.mockapi.io/users/";

    // API CRUD
    // setInterval(()=>{getData()},5000)
    useEffect(() => {
        getData();
    }, []);

    let navigate = useNavigate();
    const [data, setData] = useState([]);

    let getData = async () => {
        await fetch("https://614eac09b4f6d30017b482e5.mockapi.io/users/")
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
            .catch(error => { console.error(error) })
    }

    let handleDelete = async (id) => {
        await fetch(apiUrl+id, {
            method: 'DELETE',
        }).then(res => { getData() })
            .catch(error => { console.error(error) })
    }

    return <div className='container-fluid my-3'>
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Graduate</th>
                    <th>Department</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e, i) => {
                        return <tr key={i + 1}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>{e.degree}</td>
                            <td>{e.department}</td>
                            <td>

                                <button className='btn btn-warning' onClick={() => { navigate('/edit-student/'+e.id) }}>Edit</button>&nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </div>
}

export default AllStudents
