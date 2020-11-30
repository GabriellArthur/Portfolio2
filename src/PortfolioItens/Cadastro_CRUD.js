import React from 'react'

const Cadastro_CRUD = props => {
    return(
        <div>
            <div className='thumbnail panel-footer bg-grey slide'>
                <div className='row'>
                    <div className="jumbotron">
                        <p>IMAGENS</p>
                    </div>
                    <div className='card-container'>
                        <div className='col-sm-4'>
                            <div className='thumbnail slide jumbotron'>
                                <img src='https://i.ibb.co/DfBnHRt/imagem-2020-11-30-164801.png' alt='Jogo de zombis' width='400' height='300' />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail slide jumbotron'>
                                <img src='https://i.ibb.co/Wkh9M4c/imagem-2020-11-30-164852.png' alt='Jogo de zombis' width='400' height='300' />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail slide jumbotron'>
                                <img src='https://i.ibb.co/F32RtzB/imagem-2020-11-30-165010.png' alt='Jogo de zombis' width='400' height='300' />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail slide jumbotron'>
                                <img src='https://i.ibb.co/LZYjW0v/imagem-2020-11-30-165042.png' alt='Jogo de zombis' width='400' height='300' />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail slide jumbotron'>
                                <img src='https://i.ibb.co/CWhQnDj/imagem-2020-11-30-165108.png' alt='Jogo de zombis' width='400' height='300' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>DESCRIÇÃO</p>
                    </div>
                    <div id='about' className='container-fluid slide panel-footer'>
                        <div className='row'>
                            <div className='col-sm-8'>
                                <h2>Projeto</h2><br />
                                <p>Um projeto pensado em registro de pessoas, famoso CRUD</p>
                                <p>(Create, Read, Update and Delete)</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>Angular<small class='text-muted'>(Front-end)</small></li>
                                <li>Spring<small class='text-muted'>(Back-end)</small></li>
                                <li>MySQL<small class='text-muted'>(DBA)</small></li>
                                <p><small class="text-muted">Projeto universitário</small></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Cadastro_CRUD