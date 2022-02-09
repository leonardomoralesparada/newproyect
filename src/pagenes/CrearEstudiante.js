import React, { useState } from "react";
import './CrearEstudiante.css'

const CrearEstudiante = () => {

  const [student , setStudent] = useState('');
  const [studentList ,setStudentList] = useState([{
    estudiante: 'leonardo',
  }]);
  
  

  const handleInputChange = e => {
    setStudent(e.target.value)
  }



 const upDateStudentList = (student) => {
   //if(!studentList.find(index => index.estudiante === student)){
    // setStudentList([...studentList,{estudiante:student}]);
  // }
  setStudentList([...studentList,{estudiante:student}]);
 
 }
 console.log('prueba', setStudentList())
 

 const addStudent = e => {
   upDateStudentList(student)
   
}
 
 console.log("funcion", studentList)


    return(
      <div className="formulario">

        <form>
        <h2>Crear Estudiante</h2>
          <input 
          placeholder='Nombre del Estudiante'
          type='text'
          value={student}
          onChange={handleInputChange}
          />
          <br/>
          <br/>
           <button 
           className="button"
           onClick={addStudent}
           >
             Crear
           </button>
           <p>{student}</p>
        </form>

      </div>    
    )
}

export default CrearEstudiante;