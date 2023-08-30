import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { resetUser } from '../pages/userSlice';

function Navbar() {
   var {user} =  useSelector(state=>state.userR);
   var dispatch = useDispatch();
   var navigate = useNavigate();
   console.log(user)
   function logout(){
    dispatch(resetUser())
    navigate("/login")
   }
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img width="50px" src="https://static.hudl.com/users/temp/5048002_077197158c3f45e6b9e56d76c8e96d03.jpg" alt="" />
                    </li>
                    {
                        user.phonenumber && (
                            <>
                                <li className="nav-item">
                                    <Link to="/addNewCustomer" class="nav-link active" >Add New Customer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/customerList" class="nav-link active" >Customer List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/addProperty" class="nav-link active" >Add Property</Link>
                                </li>
                                <li>
                                    <button onClick={logout}>Logout</button>
                                </li>
                            </>
                        )
                    }
                   {
                    !user.phonenumber && (
                        <>
                            <li className="nav-item">
                                <Link class="nav-link active"  to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link active"  to="/registration">Registration</Link>
                            </li>
                        </>
                    )
                   }
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar