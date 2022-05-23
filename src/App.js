import { useState } from "react"
import Signup from "./component/Signup"
import Display from "./component/Display"
function App() {
  
  const [allStudents, setAllStudentName] = useState([]);
  const [SignUp, setSignUP] = useState("SIGNUP OR REGISTER");
  const [registerButton, setRegisterButton] = useState("signup");
  const [editNo, setEditNo] = useState();

  const register = (e) => {

    console.log(e)
    if (registerButton == "signup") {
      if (e.myFunction.firstName.firstName == "" && e.myFunction.SecondName.SecondName == "" && e.myFunction.Password.Password == "" && e.myFunction.Email.Email == "") {
        alert("the form is empty")
      }
      else if (e.myFunction.firstName.firstName == "" || e.myFunction.SecondName.SecondName == "" || e.myFunction.Password.Password == "" || e.myFunction.Email.Email == "") {
        alert("the form is not yet complete")
      }
      else {


        let setNewStudent = [...allStudents, e];
        setAllStudentName(setNewStudent);
        e.myFunction.firstName.setFirstName("");
        e.myFunction.SecondName.setSecondName("");
        e.myFunction.Email.setEmailName("");
        e.myFunction.Password.setPasswordName("")
      }
    }

    else {
      allStudents[editNo].newStudent.firstName =e.myFunction.firstName.firstName;
      allStudents[editNo].newStudent.SecondName =e.myFunction.SecondName.SecondName;
      allStudents[editNo].newStudent.Email =e.myFunction.Email.Email;
      allStudents[editNo].newStudent.Password =e.myFunction.Password.Password;
      setAllStudentName(allStudents)
      setSignUP("SIGN OR REGISTER");
      e.myFunction.firstName.setFirstName("");
      e.myFunction.SecondName.setSecondName("");
      e.myFunction.Email.setEmailName("");
      e.myFunction.Password.setPasswordName("");
      setRegisterButton("signup")


    }
  }




  const Del = (e) => {
    var found = allStudents.filter((student, index) => (index != e));
    setAllStudentName(found);
  }

  

  const edit = (e) => {
    let found = allStudents.filter((student, index) => (index == e));
    console.log(found[0].myFunction)
    found[0].myFunction.firstName.setFirstName(found[0].newStudent.firstName);
    found[0].myFunction.SecondName.setSecondName(found[0].newStudent.SecondName);
    found[0].myFunction.Email.setEmailName(found[0].newStudent.Email);
    found[0].myFunction.Password.setPasswordName(found[0].newStudent.Password);
    setRegisterButton("Edit");
    setEditNo(e);
    setSignUP("Edit")
  }






  return (
    <>

      <div className="container pt-4">

        <div className="row pt-5 d-flex align-items-center justify-content-center">
          <Signup register={register} registerButton={registerButton} SignUp={SignUp} />

        </div>
        <div className="row">
          <div className=" col-md-12 col-lg-12 col-sm-12  "  >
            <Display allStudents={allStudents} edit={edit} Del={Del} />
          </div>
        </div>
      </div>



    </>
  )
}
export default App;