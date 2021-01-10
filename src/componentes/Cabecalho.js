import React from 'react'
import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div className='navbar'>
            <nav className='navbar navbar-expand-md navbar-light navbar-dark bg-dark'>
               <Link className='navbar-brand navbar-header' to='/'>Gabriel Arthur</Link>
               <div className='collapse navbar-collapse' id='myNavbar'>
                  <ul className='nav navbar-nav navbar-right'>
                     <li><Link className='nav-link' to='/'>INICIO</Link></li>
                     <li><Link className='nav-link' to='/portfolio'>PORTFÓLIO</Link></li>
                     <li><Link className='nav-link' to='/contato'>CONTATO</Link></li>
                  </ul>
               </div>
            </nav>
            <div className='jumbotron text-center slide container-fluid panel-hover container'>
               <p>Olá, me chamo Gabriel Arthur. </p>
               <p>Atualmente sou universitário na faculdade Universidade Católica de Brasilia, cursando o 5°semestre/8°semestre de Ciência da computação.</p>
               <p>Me indentifico bastante com o back-end mas disposto a conhecer novas tecnologias.</p>
               <button type='button' className='btn btn-warning btn-lg'><Link to='/portfolio'>PORTFÓLIO</Link></button>
               <br/>
               <button type='button' className='btn btn-info btn-sm '><Link to='/contato'>CONTATO</Link></button>
            </div>
        </div>
    )
}

export default Cabecalho