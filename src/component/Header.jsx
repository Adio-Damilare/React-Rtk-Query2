import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {


  return (
    <header className='header text-light' style={{display:"flex",justifyContent:"space-between",backgroundColor
    :"brown",position:"sticky",top:"0"}}>
        <h1>Daruz Redux Blog</h1>
        <nav className='d-flex w-50' style={{alignItems:"center",justifyContent:"center"}}>
            <ul className='d-flex w-50 text-decoration-none' style={{justifyContent:"space-around",listStyle:"none"}}>
                <li className='d-flex w-50 text-decoration-none'><Link to="/"  className='text-decoration-none text-light btn' style={{textDecoration:"none"}}>Home</Link></li>
                <li className='d-flex w-50 text-decoration-none'><Link to="post"  className='text-decoration-none text-light btn' style={{textDecoration:"none"}}>Post</Link></li>
                <li className='d-flex w-50 text-decoration-none'><Link to="user"  className='text-decoration-none text-light btn' style={{textDecoration:"none"}}>Users</Link></li>
                <li className='d-flex w-50 text-decoration-none'><Link to="/user/addUser"  className='text-decoration-none text-light btn' style={{textDecoration:"none"}}>AddNewUser</Link></li>
            </ul>
          
        </nav>

    </header>
  )
}

export default Header