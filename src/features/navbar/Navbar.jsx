import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/addNewCustomer" class="nav-link active" >Add New Customer</Link>
                </li>
                <li className="nav-item">
                    <Link to="/customerList" class="nav-link active" >Customer List</Link>
                </li>
                
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar