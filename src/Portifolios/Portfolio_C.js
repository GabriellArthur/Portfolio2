import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio_C = props => {
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
                  <img src='https://i.ibb.co/BVb2PMK/letter-c-PNG22.png' alt='UberEats em C'/>
                  <p><strong>ToComFome</strong>
                  
                  <li>C</li>
                  </p>
                  <div class='d-flex justify-content-between align-items-center'>
                      <div class='btn-group'>
                          <button type='button' className='btn btn-outline-primary'><Link to='/UberEats_C'>VER</Link></button>
                      </div>
                      <p><small class='text-muted'>Projeto Universitário(12/2019)</small></p>
                  </div>
              </div>
          </div>
          <div className='col-sm-3'>
              <div className='thumbnail slide jumbotron'>
                  <img src='https://i.ibb.co/rQwP9vq/unnamed.jpg' alt='Jogo da forca em C'/>
                  <p><strong>Jogo da forca</strong>
                  
                  <li>C</li>
                  </p>
                  <div class='d-flex justify-content-between align-items-center'>
                      <div class='btn-group'>
                          <button type='button' className='btn btn-outline-primary'><Link to='/jogo-da-forca'>VER</Link></button>
                      </div>
                      <p><small class='text-muted'>Projeto Universitário(06/2019)</small></p>
                  </div>
              </div>
          </div>
      </div ><br />
  </div >
    )
}


export default Portfolio_C