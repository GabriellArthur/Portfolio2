import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from 'react-router-dom';

const Portfolio_BancoDeDados = props => {
    return (
      <div id='portfolio' className='thumbnail panel-footer text-center bg-grey'>
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
                  <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/Cadastro_CRUD'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
                      <p>
                          <small class='text-muted'>Projeto Pessoal</small>
                          <small class='text-muted'>(11/2020)</small>
                      </p>
                  </div>
              </div>
          </div>
          <div className='col-sm-3'>
              <div className='thumbnail slide jumbotron'>
                  <img src='https://i.ibb.co/TYHVjXH/logo-spotify.png' alt='Clone do Spotify'/>
                  <p><strong>Clone do Spotify</strong>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  </p>
                  <div class='d-flex justify-content-between align-items-center'>
                     <IconButton aria-label="deletar">
                        <Link className='nav-link' to='/Clone_do_spotify'>
                           <SvgIcon>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                           </SvgIcon>
                        </Link>
                     </IconButton>
                      <p>
                          <small class='text-muted'>Projeto Em Grupo/</small>
                          <small class='text-muted'>Universitário(11/2020)</small>
                      </p>
                  </div>
              </div>
          </div>
      </div ><br />
  </div >
    )
}


export default Portfolio_BancoDeDados