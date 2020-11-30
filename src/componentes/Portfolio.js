import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = props => {
    return (
        <div id='portfolio' className=' thumbnail panel-footer text-center bg-grey slide'>
            <div className='row text-center'> 
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/4ggwpkG/imagem-2020-11-05-030258.png' alt='Primeiro Portifolio'/>
                        <p><strong>Segundo Portfólio</strong>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                                <div class='btn-group'>
                                    <a href='https://gabrielarthurr.netlify.app'><button type='button' class='btn  btn-outline-primary'> Site</button></a>
                                    <a href='https://github.com/GabriellArthur/Portfolio2'><button type='button' class='btn  btn-outline-primary'> Código</button></a>
                                </div>
                            <p><small class='text-muted'>Projeto Pessoal(11/2020)</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/hWw21d9/imagem-2020-11-07-102146.png' alt='JOGO EM 2D'/>
                        <p><strong>JOGO EM 2D</strong>
                        <p class='card-text'></p>
                        <li>Java</li>
                        <li>JPlay</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                            <div class='btn-group'>
                                <button type='button' className='btn btn-outline-primary'><Link to='/Jogo_2d'>VER</Link></button>
                                <a href='https://github.com/GabriellArthur/Jogo2D'><button type='button' class='btn  btn-outline-primary'> Código</button></a>
                                </div>
                            <p><small class='text-muted'>Projeto Pessoal(10/2020)</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/TW9hMhD/Processed-with-VSCO-with-preset.jpg' alt='Primeiro Portifolio'/>
                        <p><strong>Primeiro Portfólio</strong>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                                <div class='btn-group'>
                                    <a href='https://gabriellarthur.netlify.app'><button type='button' class='btn  btn-outline-primary'> Site</button></a>
                                    <a href='https://github.com/GabriellArthur/portfolio'><button type='button' class='btn  btn-outline-primary'> Código</button></a>
                                </div><br/>
                            <p><small class='text-muted'>Projeto Pessoal(10/2020)</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/xz1y4NJ/linguagem-de-programacao-de-java.jpg' alt='UberEats em JAVA'/>
                        <p><strong>UberEats</strong>
                        <p class='card-text'></p>
                        <li>Java</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                                <div class='btn-group'>
                                    <button type='button' className='btn btn-outline-primary'><Link to='/UberEats_Java'>VER</Link></button>
                                    <a href='https://github.com/GabriellArthur/uberEats'><button type='button' class='btn  btn-outline-primary'> Código</button></a>
                                </div>
                            <p><small class='text-muted'>Projeto Universitário(10/2020)</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/BVb2PMK/letter-c-PNG22.png' alt='UberEats em C'/>
                        <p><strong>ToComFome</strong>
                        <p class='card-text'></p>
                        <li>C</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                                <div class='btn-group'>
                                    <button type='button' className='btn btn-outline-primary'><Link to='/UberEats_C'>VER</Link></button>
                                    <a href='https://github.com/GabriellArthur/TOCOMFOME'><button type='button' class='btn  btn-outline-primary'> Código</button></a>
                                </div>
                            <p><small class='text-muted'>Projeto Universitário(12/2019)</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/rQwP9vq/unnamed.jpg' alt='Jogo da forca em C'/>
                        <p><strong>Jogo da forca</strong>
                        <p class='card-text'></p>
                        <li>C</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                                <div class='btn-group'>
                                    <button type='button' className='btn btn-outline-primary'><Link to='/jogo-da-forca'>VER</Link></button>
                                    <a href='https://github.com/GabriellArthur/jogo-da-forca'><button type='button' className='btn btn-outline-primary'> Código</button></a>
                                </div>
                            <p><small class='text-muted'>Projeto Universitário(06/2019)</small></p>
                        </div>
                    </div>
                </div>
            </div ><br />
        </div >
    )
}

export default Portfolio