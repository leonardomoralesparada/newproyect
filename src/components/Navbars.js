import React from "react";
import './Navbars.css'
import { NavLink } from "react-router-dom";

const Navbars = () => {
    return(
     <nav className="Navbars">
         <ul>
             <li>
                 <NavLink to="/">CrearEstudiante</NavLink>
             </li>
             <li>
                 <NavLink to="/editar">EditarEstudiante</NavLink>
             </li>
             <li>
                 <NavLink to="/borrar">BorrarEstudiante</NavLink>
             </li>
         </ul>
     </nav>
    )
}

export default Navbars