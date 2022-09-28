import React from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/UserSlice";
import {Link} from "react-router-dom"
 
 const PostAuthor = ({userId}) => {
    const users=useSelector(selectAllUsers);
    const Author=users.find(user=>user.id===userId)
   return( <span>{Author?<Link to={`/user/${userId}`}>{Author.name}</Link>:"Unknown Author"}</span>)
 }
 
 export default PostAuthor