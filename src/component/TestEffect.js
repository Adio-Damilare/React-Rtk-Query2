import React from "react"
import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"

const TestEffect = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {

        makeRequest();
    }, [])
    let url2 = "https://finalspaceapi.com/api/v0/character"
    let url = "https://jsonplaceholder.typicode.com/users"
    const makeRequest = () => {
        axios.get(url2).then((response) => {
            console.log("am working perfectly")
            console.log(response.data)
            setUsers(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (

        <>
            <div className="row">
                {users.map((person, i) =>(
                    <div key={i} className="col-lg-4 col-md-6 col-sm-12 my-4 card">
                        <div  className="">
                            <img src={person.img_url} className="img img-responsive " />
                        </div>
                        <p className="text-center">{person.name}</p>
                    </div>

                ))

                }
            </div>


        </>
    )
}

export default TestEffect