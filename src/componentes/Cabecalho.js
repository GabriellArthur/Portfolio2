import React from 'react'
import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <div className='jumbotron text-center slide container-fluid panel-hover'>
                <h1>PORTFOLIO</h1><br/>
                <p>Olá meu nome é Gabriel Arthur. </p>
                <p>Atualmente sou Universitario na faculdade Universidade Catolica de Brasilia, cursando o 4°semestre/8°semestre. </p>
                <p>Me indentifico bastante com o back-end mas sempre disposto a conhecer novas tecnologias.</p>
                <form><br/>
                    <div className='-group'>
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'><Link to='/contato'>CONTATO</Link></button>
                        </div>
                    </div>
                </form>
            </div>
            <nav className='navbar navbar-default navbar-fixed-top '>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to='/'>Gabriel Arthur</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>INICIO</Link></li>
                            <li><Link to='/portfolio'>PORTFOLIO</Link></li>
                            <li><Link to='/contato'>CONTATO</Link></li>
                        </ul>
                    </div>
                </div><br/>
            </nav>
        </div>
    )
}

export default Cabecalho