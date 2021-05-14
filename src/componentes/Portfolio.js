import React from "react";
import { Link } from "react-router-dom";

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
              src="https://i.ibb.co/3kFJfBN/Flutter-Dart-facebook.png"
              alt="HomePage_Facebook"
            />
            <p>
              <strong>Facebook HomePage_UI (web/mobile)</strong>

              <li>Dart</li>
              <li>Flutter</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/HomePage_facebook">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/AplicativoSimples">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/ConversorDeMoedas">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/Login_Register">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/todoList">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/Cadastro_CRUD">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/Polishop">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/Clone_do_spotify">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/Jogo_2d">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/UberEats_Java">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/UberEats_C">VER</Link>
                </button>
              </div>
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
              <div class="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  <Link to="/jogo-da-forca">VER</Link>
                </button>
              </div>
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
