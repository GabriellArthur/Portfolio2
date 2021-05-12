import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio_JS = props => {
    return (
      <div id='portfolio' className='thumbnail panel-footer text-center bg-grey'>
      <nav className='navbar'>
         <div className='collapse navbar-collapse' id='myNavbarPortifolio'>
            <ul className='nav navbar-nav navbar-header'>
               <li><Link className='nav-link' to='/Java'>Java</Link></li>
               <li><Link className='nav-link' to='/BandoDeDados'>Banco de Dados</Link></li>
               <li><Link className='nav-link' to='/Js'>JavaScript</Link></li>
               <li><Link className='nav-link' to='/C'>C</Link></li>
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
                  <img src='https://i.ibb.co/4ggwpkG/imagem-2020-11-05-030258.png' alt='Primeiro Portifolio'/>
                  <p><strong>Segundo Portfólio</strong>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  </p>
                  <div class='d-flex justify-content-between align-items-center'>
                      <div class='btn-group'>
                          <a href='https://gabrielarthurr.netlify.app'><button type='button' class='btn  btn-outline-primary'> Site</button></a>
                      </div>
                      <p><small class='text-muted'>Projeto Pessoal(11/2020)</small></p>
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
                      </div><br/>
                      <p><small class='text-muted'>Projeto Pessoal(10/2020)</small></p>
                  </div>
              </div>
          </div>
      </div ><br />
  </div >
    )
}


export default Portfolio_JS