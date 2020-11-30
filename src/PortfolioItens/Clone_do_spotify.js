import React from 'react'

const Clone_do_spotify = props => {
    return(
        <div>
            <div className='thumbnail panel-footer bg-grey slide'>
                <div className='jumbotron row text-center'>
                    <p>IMAGENS</p>
                </div>
                <div className='row card-container'>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/HTKXSyF/Modelo-fisico-1.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/xYmGYPW/imagem-2020-11-30-162744.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                </div>

                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>DESCRIÇÃO</p>
                    </div>
                    <div id='about' className='container-fluid slide panel-footer'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <h2>Projeto</h2><br />
                                <p>Esta modelagem tem como objetivo manusear um sistema de streaming de músicas bastante conhecido: o Spotify.</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>MySQL<small class='text-muted'>(MySQL Workbench)</small></li>
                                <li>PostgreSQL<small class='text-muted'>(DBeaver)</small></li>  
                                <p><small class="text-muted">Projeto universitário</small></p>                
                            </div>
                            <div className='col-sm-4'>
                                <h2>PARTICIPANTES</h2>
                                <p class="card-text"></p>
                                <a href="https://github.com/VitorG718"><button type="button" class="btn btn-outline-primary"> Vitor</button></a>
                                <a href="https://github.com/GabriellArthur"><button type="button" class="btn btn-outline-primary"> Gabriel</button></a>
                                <a href="https://github.com/douglazhs"><button type="button" class="btn btn-outline-primary"> Douglas</button></a>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Clone_do_spotify