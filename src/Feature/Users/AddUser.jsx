import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers, totalUser } from './UserSlice'
import { useAddNewUserMutation} from "./UserSlice";
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    const navigate=useNavigate();
    const TotalUser=useSelector(selectAllUsers);
  
    const [addNewUser,{isLoading}] =useAddNewUserMutation()
    let newUserId=TotalUser?.length+1;

    const [values,setValues]=useState({
        name:"",
        username:"",
        email:"",
        id:0

    })

    const handleOnchange=(e)=>{
        console.log(newUserId)
        setValues({...values,[e.target.name]:e.target.value,id:newUserId})

    }
    // console.log(totalUser,"Good at all time is God")
   
    let cansave=[values.name,values.username,values.email,values.id].every(Boolean) 
    const handleSubmit= async ()=>{
        console.log(values)
        if(cansave){
            alert("goooo")
             await addNewUser(values)
            // navigate("/user")

        }

    }
  return (
    <section className='w-100 d-flex' style={{flexDirection:"column",minHeight:"100vh",alignItems:"center"}}>
        <h2 className='text-center'>Add new user</h2>
        <div className='w-25'>
            <input type="text" className='form-control my-3 ' onChange={(e)=>handleOnchange(e)} name="name" placeholder=' Name' id="" />
            <input type="text" className='form-control my-3 ' name="username"  onChange={(e)=>handleOnchange(e)} placeholder=' Username' id="" />
            <input type="text" className='form-control my-3 ' placeholder='email'  onChange={(e)=>handleOnchange(e)} name="email" id="" />
            <button className='w-100 btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
    </section>
  )
}

export default AddUser