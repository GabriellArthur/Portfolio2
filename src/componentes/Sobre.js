import React from 'react'
import {Link} from 'react-router-dom'

const Sobre = () => {
   return (
      <div className='Sobre'>
         <div className='jumbotron text-center slide container-fluid panel-hover container'>
            <div className='row'>
               <div className='col-sm-4'>
                  <img
                  src='https://i.ibb.co/ZXsR3xJ/imagem-2021-05-15-160024.png'
                  alt="Clone do Spotify"
                  width='400'
                  />
               </div>
               <div className='col-sm-8'>
                     <h2>Quem eu sou?</h2><br/>
                     <p>Me chamo Gabriel Arthur</p>
                     <p>Atualmente sou universitário na faculdade Universidade Católica de Brasilia, cursando o 5°semestre/8°semestre de Ciência da computação.</p>
                     <p>Me indentifico bastante com o back-end mas disposto a conhecer novas tecnologias.</p>
               </div>
            </div>
            <button type='button' className='btn btn-warning btn-lg'><Link to='/portfolio'>PORTFÓLIO</Link></button>
            <br/>
            <button type='button' className='btn btn-info btn-sm '><Link to='/Contact'>CONTATO</Link></button>
         </div>
      </div>
   )
}

export default Sobre