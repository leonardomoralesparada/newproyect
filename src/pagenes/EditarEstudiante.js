import React from "react";
import './EditarEstudiante.css'

const EditarEstudiante = () => {
    return(
     <div className="editar">            
      <form>
          <h2>Editar Estudiante</h2>
          <input placeholder="Editar Estudiante"/>
          <br/>
          <br/>
          <button>Editar</button>
      </form>
    </div>   
    )
}

export default EditarEstudiante;