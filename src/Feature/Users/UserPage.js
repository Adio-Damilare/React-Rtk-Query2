import React from 'react';
import {useParams,Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUserById } from './UserSlice';
import { useGetPostsByUserIdQuery } from '../Post/postSlice';

const UserPage = () => { 
    const {userId} =useParams();
    const user=useSelector((state)=>selectUserById(state,Number(userId)));
    // console.log(user)
    const {data:postForuser,isLoading,isSuccess,isError,error}=useGetPostsByUserIdQuery(userId);

   let content;
   if(isLoading){
    content=<p>LOADING........</p>
   }else if(isSuccess){
    let {ids,entities}=postForuser;
    content=ids.map(id=>(
    <li key={id}>
      <Link to={`/post/${id}`}>
        {entities[id].title}
      </Link>

    </li>
    ))
   }else if(isError){
    content=<p>{error}</p>
   } 

  return (
  <section style={{height:"100vh",justifyContent:"center",alignItems:"center"}} className="w-100 d-flex " >
    <div>
    <h2>{user?.name.substring(0,20)} posts</h2>
    <ol>{content}</ol>
    </div>
  </section>
  )
}

export default UserPage