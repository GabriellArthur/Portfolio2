import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";

const Portfolio_C = (props) => {
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
              src="https://i.ibb.co/BVb2PMK/letter-c-PNG22.png"
              alt="UberEats em C"
            />
            <p>
              <strong>ToComFome</strong>

              <li>C</li>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <IconButton aria-label="deletar">
                <Link className="nav-link" to="/UberEats_C">
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
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
                <Link className="nav-link" to="/jogo-da-forca">
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
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

export default Portfolio_C;
