import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from 'react-router-dom';

const Portfolio_Flutter = (props) => {
  return (
    <div id="portfolio" className="thumbnail panel-footer text-center bg-grey">
      <nav className="navbar">
        <div className="collapse navbar-collapse" id="myNavbarPortifolio">
          <ul className="nav navbar-nav navbar-header">
            <li>
              <Link className="nav-link" to="/Java">
                Java/Spring
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/BandoDeDados">
                Banco de Dados
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Js">
                Js/Angular/React
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/C">
                C
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Flutter">
                Dart/Flutter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row card-container">
        <div className="col-sm-4">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/3kFJfBN/Flutter-Dart-facebook.png"
              alt="HomePage_Facebook"
            />
            <p>
              <strong>Facebook HomePage_UI  (web/mobile)</strong>

              <li>Dart</li>
              <li>Flutter</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/HomePage_facebook'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail slide jumbotron">
          <img
              src="https://i.ibb.co/bX2pXdL/imagem-2021-05-13-221044.png"
              alt="Aplicativo Simples"
            />
            <p>
              <strong>Aplicativo Simples</strong>

              <li>Dart</li>
              <li>Flutter</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/AplicativoSimples'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail slide jumbotron">
          <img
              src="https://i.ibb.co/yNJYmQ6/imagem-2021-05-13-221313.png"
              alt="Conversor De Moedas"
            />
            <p>
              <strong>Conversor De Moedas</strong>

              <li>Dart</li>
              <li>Flutter</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/ConversorDeMoedas'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail slide jumbotron">
          <img
              src="https://i.ibb.co/xDN2J7B/imagem-2021-05-13-221650.png"
              alt="Pagina de Login e Registro"
            />
            <p>
              <strong>Tela de Login e Registro</strong>

              <li>Dart</li>
              <li>Flutter</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/Login_Register'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail slide jumbotron">
          <img
              src="https://i.ibb.co/QmFxWN6/imagem-2021-05-13-221811.png"
              alt="todo-list com API publica"
            />
            <p>
              <strong>todo-list com API publica</strong>

              <li>Dart</li>
              <li>Flutter</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/todoList'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Portfolio_Flutter;
