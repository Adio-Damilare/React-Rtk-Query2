import React from 'react'
import { useSelector } from 'react-redux';
import { selectUserById } from './UserSlice';
import {Link} from "react-router-dom"
import { useDeleteUserMutation } from './UserSlice';

let SingleUser = ({id}) => {
  const [deleteUser,{isloading}]=useDeleteUserMutation();
    const user=useSelector((state)=>selectUserById(state,Number(id)))
    const handleDelete= async (id)=>{
      await deleteUser(id);
      console.log(id)
    }
  return (
   <li className='mt-1'>
    <Link to={`/user/${id}`}>{user.name.substring(0,20)}</Link>
    <button className='btn ms-4 btn-danger' onClick={()=>handleDelete(id)}>D</button>
    <button className='btn ms-4 btn-success' onClick={()=>handleDelete(id)}>E</button>
   </li>
  )
}
SingleUser=React.memo(SingleUser)

export default SingleUser