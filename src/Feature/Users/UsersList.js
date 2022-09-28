import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers, selectUserById, selectUserSByIds } from './UserSlice';
import {Link} from "react-router-dom"
import SingleUser from './SingleUser';

const UsersList = () => {
    const usersIdS=useSelector(selectUserSByIds);
    const renderUsers=usersIdS.map((id)=>{       
        return(
            <SingleUser key={id} id={id}/>
        )
    }
    )
  return (
   <section className='d-flex w-100' style={{alignItems:"center",minHeight:"100vh",justifyContent:"center"}}>
    <div>
        <h2>Users</h2>
        <ul>{renderUsers}</ul>
    </div>
   </section>
  )
}

export default UsersList