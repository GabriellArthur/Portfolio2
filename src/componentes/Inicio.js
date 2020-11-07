import React from 'react'

const Inicio = props => {
    return (
        <div>
            <div id='about' className='container-fluid slide panel-footer '>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Carreira Academica</h2><br />
                        <h4>Assim que entrei na faculdade...</h4>
                        <p>Dei de cara com a programação, tive dificuldades, pensei em até desistir do curso mas ao poucos fui começando a gostas e hoje é o que eu mais amo fazer.</p>
                        <p>Já desenvolvi muitas coisas, algumas delas estão aqui a baixo, basta clickar no link.👈</p>
                        <br /><button type='button' className='btn btn-outline-primary'><Link to='/portfolio'>PORTFÓLIO</Link></button>
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
                        <p><strong>MONITORIA:</strong>Aulas de Programação estruturada</p>
                    </div>
                </div>
            </div>

            <div id='about' className='container-fluid slide panel-footer'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre mim</h2><br />
                        <p>Experiência desde pequeno com Computadores e Internet,
                            Formatação e montagem de computador, instalação de Windows, Linux, pacote Office e outro...
                            Facilidade para identificar problemas quanto a mal funcionamento do computador e resolvê-los</p>
                        <br /><button type='button' className='btn btn-outline-primary'><Link to='/contato'>CONTATO</Link></button>
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