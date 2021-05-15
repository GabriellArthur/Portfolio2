import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from 'react-router-dom';

const Portfolio = (props) => {
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
      <div className="col-sm-3">
        <div className="thumbnail slide jumbotron">
          <img
            src="https://i.ibb.co/0qWN9wh/imagem-2021-05-15-140956.png"
            alt="Clone do Spotify"
          />
          <p>
            <strong>Jogo de Estrategia Multiplayer/Singleplayer</strong>
            <li>Java</li>
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <IconButton aria-label="deletar">
               <Link className='nav-link' to='/Clone_do_spotify'>
                  <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                  </SvgIcon>
               </Link>
            </IconButton>
            <p>
              <small class="text-muted">Projeto </small>
              <small class="text-muted">Universitário(05/2021)</small>
            </p>
          </div>
        </div>
      </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/3kFJfBN/Flutter-Dart-facebook.png"
              alt="HomePage_Facebook"
            />
            <p>
              <strong>Facebook HomePage_UI (web/mobile)</strong>

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
        <div className="col-sm-3">
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
        <div className="col-sm-3">
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
        <div className="col-sm-3">
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
        <div className="col-sm-3">
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
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/qydPsPd/800px-Spring-Framework-Logo-2018-svg.png"
              alt="Clone do Spotify"
            />
            <p>
              <strong>Cadastro - CRUD</strong>
              <li>
                Angular<small class="text-muted">(Front-end)</small>
              </li>
              <li>
                Android<small class="text-muted">(Mobile)</small>
              </li>
              <li>
                Spring<small class="text-muted">(Back-end)</small>
              </li>
              <li>
                MySQL<small class="text-muted">(DBA)</small>
              </li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/Cadastro_CRUD'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal</small>
                <small class="text-muted">(11/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/n0sQFd7/java-logo.png"
              alt="Clone do Spotify"
            />
            <p>
              <strong>Polishop</strong>
              <li>Java</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/Polishop'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto </small>
                <small class="text-muted">Universitário(11/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/TYHVjXH/logo-spotify.png"
              alt="Clone do Spotify"
            />
            <p>
              <strong>Clone do Spotify</strong>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/Clone_do_spotify'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Em Grupo/</small>
                <small class="text-muted">Universitário(11/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/4ggwpkG/imagem-2020-11-05-030258.png"
              alt="Primeiro Portifolio"
            />
            <p>
              <strong>Segundo Portfólio</strong>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="https://gabrielarthurr.netlify.app">
                  <button type="button" class="btn  btn-outline-primary">
                    {" "}
                    Site
                  </button>
                </a>
              </div>
              <p>
                <small class="text-muted">Projeto Pessoal(11/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/hWw21d9/imagem-2020-11-07-102146.png"
              alt="JOGO EM 2D"
            />
            <p>
              <strong>JOGO EM 2D</strong>
              <p class="card-text"></p>
              <li>Java</li>
              <li>JPlay</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/Jogo_2d'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Pessoal(10/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/TW9hMhD/Processed-with-VSCO-with-preset.jpg"
              alt="Primeiro Portifolio"
            />
            <p>
              <strong>Primeiro Portfólio</strong>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="https://gabriellarthur.netlify.app">
                  <button type="button" class="btn  btn-outline-primary">
                    {" "}
                    Site
                  </button>
                </a>
              </div>
              <br />
              <p>
                <small class="text-muted">Projeto Pessoal(10/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/xz1y4NJ/linguagem-de-programacao-de-java.jpg"
              alt="UberEats em JAVA"
            />
            <p>
              <strong>UberEats</strong>

              <li>Java</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/UberEats_Java'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Universitário(10/2020)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/BVb2PMK/letter-c-PNG22.png"
              alt="UberEats em C"
            />
            <p>
              <strong>ToComFome</strong>

              <li>C</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/UberEats_C'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Universitário(12/2019)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail slide jumbotron">
            <img
              src="https://i.ibb.co/rQwP9vq/unnamed.jpg"
              alt="Jogo da forca em C"
            />
            <p>
              <strong>Jogo da forca</strong>

              <li>C</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
               <IconButton aria-label="deletar">
                  <Link className='nav-link' to='/jogo-da-forca'>
                     <SvgIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                     </SvgIcon>
                  </Link>
               </IconButton>
              <p>
                <small class="text-muted">Projeto Universitário(06/2019)</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Portfolio;
