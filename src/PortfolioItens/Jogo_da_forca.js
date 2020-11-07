import React from 'react'

const Jogo_da_forca = props => {
    return(
        <div>
            <div id="jogo-da-forca" className='thumbnail panel-footer bg-grey slide'>
                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>IMAGENS</p>
                    </div>
                    <div className='col-sm-3'>
                        <div className='thumbnail slide jumbotron'>
                            
                            <img src='https://i.ibb.co/jh4BPgC/imagem-2020-11-07-041610.png' alt='Jogo da forca em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/cxs6Q6z/imagem-2020-11-07-041653.png' alt='Jogo da forca em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/47yckgR/imagem-2020-11-07-041725.png' alt='Jogo da forca em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/0qx1Qg7/imagem-2020-11-07-041934.png' alt='Jogo da forca em C' width='400' height='300' />
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
                                <p>A ideia desse projeto era a criação de um jogo da forca para jogar sozinho(sinleplayer) ou com os amigos(multplayer) ultilizando a linguagem C.</p>
                                <p>A partir dessas idea foi implementada um jogo com 3 dificuldades, sendo palavras e temas simples e complexos.</p>
                                <p>A proposta multplayer é composta de dois jogadores, aonde um player escolhe o tema e a palavra chave e o outro player tenta decifrar.</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>C</li>
                                <a href="https://github.com/GabriellArthur/jogo-da-forca"><button type="button" class="btn btn-outline-primary"> Código</button></a>   
                                <p><small class="text-muted">Projeto Unisitario</small></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Jogo_da_forca