import React from 'react'

function Display({ allStudents, edit, Del }) {
    const noUser = {
        fontSize: 50
    }
    const five = 5
    return (
        <>
            <div class="table-responsive text-nowrap">
                <table className="table table-responsive table bordered">
                    <thead>
                        <tr>
                            <th><strong>S/N</strong></th>
                            <th><strong>Firstname</strong></th>
                            <th><strong>Lastname</strong></th>
                            <th><strong>EMAIL</strong></th>
                            <th><strong>Action</strong></th>
                        </tr>
                    </thead>

                    {allStudents.length < 1 ? <tbody> <tr className="text-center text-primary border pt-3 mt-4" ><td colSpan={five} style={noUser}><strong>No user</strong></td></tr></tbody> :
                        <tbody>
                            {
                                allStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td><strong>{index + 1}</strong></td>
                                        <td><p>{student.newStudent.firstName}</p></td>
                                        <td><p>{student.newStudent.SecondName}</p></td>
                                        <td><p>{student.newStudent.Email}</p></td>
                                        <td className="border"><button className="btn w-sm-50 bg-warning mx-2" onClick={() => edit(index)}>Edit</button><button className="btn btn-danger w-sm-50" onClick={() => Del(index)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    }
                </table>
            </div>

        </>
    )
}

export default Display