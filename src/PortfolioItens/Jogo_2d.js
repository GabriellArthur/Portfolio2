import React from 'react'

const Jogo_2d = props => {
    return(
        <div>
            <div className='thumbnail panel-footer bg-grey slide'>
                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>IMAGENS</p>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/mqN1815/imagem-2020-11-07-102126.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/MRcKJmJ/imagem-2020-11-07-102146.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/qmw5qk8/imagem-2020-11-07-102326.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/JcG1MNh/imagem-2020-11-07-102347.png' alt='Jogo de zombis' width='400' height='300' />
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
                                <p>Projeto pensado um jogo em 2D de apocalipse zombi</p>
                                <p>A ideia é ir passando de fase conforme os misterios...</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>JAVA</li>
                                <li>JPlay</li>
                                <a href="https://github.com/GabriellArthur/Jogo2D"><button type="button" class="btn btn-outline-primary"> Código</button></a>   
                                <p><small class="text-muted">Projeto universitário</small></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Jogo_2d