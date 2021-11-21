import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100 fw-bolder">
            <div>
                Welcome!!!
            </div>
            <Link to='/add-student'>
                <i className="fas fa-user-plus"></i>
                <span>Add Student</span>
            </Link>
            <Link to='/all-students'>
                <i className="fas fa-list"></i>
                <span>All tudents</span>
            </Link>
        </div>
    )
}

export default Welcome
