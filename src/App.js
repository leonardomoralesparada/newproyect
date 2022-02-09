import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbars from './components/Navbars';
import BorrarEstudiante from './pagenes/BorrarEstudiante';
import EditarEstudiante from './pagenes/EditarEstudiante';
import CrearEstudiante from './pagenes/CrearEstudiante';


function App() {
  return (

   <React.Fragment> 
 
     <BrowserRouter>
      <Navbars/>
       <Routes>
         <Route path='/Editar' element={<EditarEstudiante/>} />
         <Route path='/Borrar' element={<BorrarEstudiante/>} />
         <Route path='/' element={<CrearEstudiante/>} />
       </Routes>
     </BrowserRouter>        
    
   </React.Fragment>  
   
  );
}

export default App;
