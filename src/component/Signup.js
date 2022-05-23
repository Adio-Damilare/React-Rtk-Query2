import React from 'react'
import { useState } from 'react'

function Signup({ register, SignUp,registerButton }) {
    //styleS
  
    const noUser = {
        fontSize: 50
    }
    const outlineNone = {
        outLine: 1
    }

    const paddng = {
        paddingLeft: 40
    }
    let backGroundSuccess = {
        backgroundColor: "green"
    }
    const backgroundPrimaryForSignup = {
        color: "blue"
    }

    const outlineNone1 = {

    }
    const [firstName, setFirstName] = useState("");
    const [SecondName, setSecondName] = useState("");
    const [Email, setEmailName] = useState("");
    const [Password, setPasswordName] = useState("");
    // const [registerButton, setRegisterButton] = useState("signup");
    return (
        <>
            <div className="col-lg-6 col-md-12 col-xxl-6  p-4 rounded-3 card shadow-sm border border-4 border">
                <div className="text-center">
                    <h3 className="fw-bold" style={backgroundPrimaryForSignup}>{SignUp}</h3>
                </div>
                <label>Firstname</label>
                <input className="form-control my-2" style={outlineNone} type="text" onChange={(event) => setFirstName(event.target.value)} placeholder="Firstname" value={firstName} />
                <label>Lastname</label>
                <input className="form-control my-2" style={outlineNone} type="text" onChange={(event) => setSecondName(event.target.value)} placeholder="Lastname" value={SecondName} />
                <label>Email address</label>
                <input className="form-control my-2" style={outlineNone} type="text" onChange={(event) => setEmailName(event.target.value)} placeholder="example@gmail.com" value={Email} />
                <label>Password</label>
                <input className="form-control my-2  px-2" type="password" placeholder="***************" style={outlineNone1} onChange={(event) => setPasswordName(event.target.value)} value={Password} />
                <button className="btn my-2 text-white  w-lg-50 btn-outline-primary" style={backGroundSuccess} type="button" onClick={() => register({ myFunction:{firstName:{ firstName, setFirstName }, SecondName:{ SecondName, setSecondName }, Email:{ Email, setEmailName }, Password: { Password, setPasswordName }} ,newStudent:{firstName, SecondName, Email, Password } })}>{registerButton}</button>
            </div>
        </>
    )
}

export default Signup