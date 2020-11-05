import React from 'react'

const Portfolio = props => {
    return (
        <div id='portfolio' className=' thumbnail panel-footer text-center bg-grey slide'>
            <div className='row text-center'> 
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/4ggwpkG/imagem-2020-11-05-030258.png' alt='Primeiro Portifolio' width='400' height='300' />
                        <p><strong>Segundo Portfólio</strong>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="https://github.com/GabriellArthur/Portfolio2"><button type="button" class="btn btn-sm btn-outline-primary">Ver Código</button></a>
                                </div><br/>
                                <div class="btn-group">
                                    <a href="https://gabriellarthurr.netlify.app"><button type="button" class="btn btn-sm btn-outline-primary">Ver Site</button></a>
                                </div>
                            <p><small class="text-muted">Projeto Pessoal</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/pfzP3F8/2b4ae173-4f75-4a32-9b83-d1e3ddf53873.jpg' alt='JOGO EM 2D' width='400' height='300' />
                        <p><strong>JOGO EM 2D</strong>
                        <p class="card-text"></p>
                        <li>Java</li>
                        <li>JPlay</li>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://github.com/GabriellArthur/Jogo2D"><button type="button" class="btn btn-sm btn-outline-primary">Ver Código</button></a>
                                </div>
                            <p><small class="text-muted">Projeto Pessoal</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/TW9hMhD/Processed-with-VSCO-with-preset.jpg' alt='Primeiro Portifolio' width='400' height='300' />
                        <p><strong>Primeiro Portfólio</strong>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="https://github.com/GabriellArthur/portfolio"><button type="button" class="btn btn-sm btn-outline-primary">Ver Código</button></a>
                                </div><br/>
                                <div class="btn-group">
                                    <a href="https://gabriellarthur.netlify.app"><button type="button" class="btn btn-sm btn-outline-primary">Ver Site</button></a>
                                </div>
                            <p><small class="text-muted">Projeto Pessoal</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/xz1y4NJ/linguagem-de-programacao-de-java.jpg' alt='UberEats em JAVA' width='400' height='300' />
                        <p><strong>UberEats</strong>
                        <p class="card-text">Simulação de como é um sistema de entregas de comida voltada só ao cliente, com criação e automatização de restaurantes e entregadores.</p>
                        <li>Java</li>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="https://github.com/GabriellArthur/uberEats"><button type="button" class="btn btn-sm btn-outline-primary">Ver Código</button></a>
                                </div>
                            <p><small class="text-muted">Projeto Universitario</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/BVb2PMK/letter-c-PNG22.png' alt='UberEats em C' width='400' height='300' />
                        <p><strong>UberEats</strong>
                        <p class="card-text">Um clone identico e sem interface do iFood com sistemas de entregador, restaurante e cliente.</p>
                        <li>C</li>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="https://github.com/GabriellArthur/TOCOMFOME"><button type="button" class="btn btn-sm btn-outline-primary">Ver Código</button></a>
                                </div>
                            <p><small class="text-muted">Projeto Universitario</small></p>
                        </div>
                    </div>
                </div>
            </div ><br />
        </div >
    )
}

export default Portfolio