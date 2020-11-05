import React from 'react'
import {Link} from 'react-router-dom'

const Inicio = props => {
    return (
        <div>
            <div id='about' className='container-fluid slide panel-footer '>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Carreira Academica</h2><br />
                        <h4>Somos uma compania de tal coisa que faz x e y </h4>
                        <p>Tem a maior infraestututra do mercado pronto para te atender </p>
                        <br /><button className='btn btn-default btn-lg'><Link to='/portfolio'>PORTFOLIO</Link></button>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-book logo'></span>
                    </div>
                </div>
            </div>

            <div className='container-fluid panel-footer slide'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-briefcase logo '></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>Carreira Profissional</h2><br />
                        <h4><strong>MISSÃO:</strong> temos como uma missão de tal coisa </h4><br />
                        <p><strong>PENSAMENTO:</strong> Nosso pensamentos vão alem do comum</p>
                    </div>
                </div>
            </div>

            <div id='about' className='container-fluid slide panel-footer'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre mim</h2><br />
                        <h4>Somos uma compania de tal coisa que faz x e y </h4>
                        <p>Tem a maior infraestututra do mercado pronto para te atender </p>
                        <br /><button className='btn btn-default btn-lg'><Link to='/portfolio'>CONTATO</Link></button>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo '></span>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio