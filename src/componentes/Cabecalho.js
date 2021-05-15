import React from 'react'
import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div className='navbar'>
            <nav className='navbar navbar-expand-md navbar-light navbar-dark bg-dark'>
               <Link className='navbar-brand navbar-header' to='/'>Gabriel Arthur</Link>
               <div className='collapse navbar-collapse' id='myNavbar'>
                  <ul className='nav navbar-nav navbar-right'>
                     <li><Link className='nav-link' to='/About'>Sobre</Link></li>
                     <li><Link className='nav-link' to='/Portfolio'>Portifolio</Link></li>
                     <li><Link className='nav-link' to='/Contact'>Contato</Link></li>
                  </ul>
               </div>
            </nav>
        </div>
    )
}

export default Cabecalho