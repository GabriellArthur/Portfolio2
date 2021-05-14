import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio_Java = props => {
    return (
        <div id='Portfolio_Java' className='thumbnail panel-footer text-center bg-grey'>
            <nav className='navbar'>
               <div className='collapse navbar-collapse' id='myNavbarPortifolio'>
                  <ul className='nav navbar-nav navbar-header'>
                     <li><Link className='nav-link' to='/Java'>Java/Spring</Link></li>
                     <li><Link className='nav-link' to='/BandoDeDados'>Banco de Dados</Link></li>
                     <li><Link className='nav-link' to='/Js'>Js/Angular/React</Link></li>
                     <li><Link className='nav-link' to='/C'>C</Link></li>
                     <li><Link className='nav-link' to='/Flutter'>Dart/Flutter</Link></li>
                  </ul>
               </div>
            </nav>
            <div className='row card-container'> 
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/qydPsPd/800px-Spring-Framework-Logo-2018-svg.png' alt='Clone do Spotify'/>
                        <p><strong>Cadastro - CRUD</strong>
                        <li>Angular<small class='text-muted'>(Front-end)</small></li>
                        <li>Android<small class='text-muted'>(Mobile)</small></li>
                        <li>Spring<small class='text-muted'>(Back-end)</small></li>
                        <li>MySQL<small class='text-muted'>(DBA)</small></li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                            <div class='btn-group'>
                                <button type='button' className='btn btn-outline-primary'><Link to='/Cadastro_CRUD'>VER</Link></button>
                            </div>
                            <p>
                                <small class='text-muted'>Projeto Pessoal</small>
                                <small class='text-muted'>(11/2020)</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/n0sQFd7/java-logo.png' alt='Clone do Spotify'/>
                        <p><strong>Polishop</strong>
                        <li>Java</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                            <div class='btn-group'>
                                <button type='button' className='btn btn-outline-primary'><Link to='/Polishop'>VER</Link></button>
                            </div>
                            <p>
                                <small class='text-muted'>Projeto </small>
                                <small class='text-muted'>Universitário(11/2020)</small>
                            </p>
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
                            </div>
                            <p><small class='text-muted'>Projeto Pessoal(10/2020)</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='thumbnail slide jumbotron'>
                        <img src='https://i.ibb.co/xz1y4NJ/linguagem-de-programacao-de-java.jpg' alt='UberEats em JAVA'/>
                        <p><strong>UberEats</strong>
                        
                        <li>Java</li>
                        </p>
                        <div class='d-flex justify-content-between align-items-center'>
                            <div class='btn-group'>
                                <button type='button' className='btn btn-outline-primary'><Link to='/UberEats_Java'>VER</Link></button>
                            </div>
                            <p><small class='text-muted'>Projeto Universitário(10/2020)</small></p>
                        </div>
                    </div>
                </div>
            </div ><br />
        </div >
    )
}


export default Portfolio_Java