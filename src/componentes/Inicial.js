import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from 'react-router-dom';

const Inicial = (props) => {
  return (
   <div className='Sobre'>
      <div className='jumbotron text-center slide container-fluid panel-hover container'>
         <h1>Toda hora é hora de 
         <br/>
         <span className="titulo"> Codificar</span>
         </h1>
         <p>Me chamo Gabriel Arthur, e sou desenvolvedor.</p>
         <IconButton aria-label="deletar">
            <Link className='nav-link' to='/Portfolio'>
               <SvgIcon>
                  <path className="titulo" d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
               </SvgIcon>
            </Link>
         </IconButton>
      </div>
   </div>
  );
};

export default Inicial
