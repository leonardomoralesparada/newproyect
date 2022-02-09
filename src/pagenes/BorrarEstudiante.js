import React from "react";
import './BorrarEstudiante.css'

const BorrarEstudiante = () => {
    return(
    <div className="borrar">             
     <form>
         <h2>Borrar Estudiante</h2>
         <input placeholder="Borrar Estudiante" type='text'/>
         <br/>
         <br/>
         <button>Borrar</button>
     </form>
    </div>      
    )
}

export default BorrarEstudiante;