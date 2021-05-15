import React from "react";

const JogoEstrategia = (props) => {
  return (
    <div>
      <div className="thumbnail panel-footer bg-grey slide">
        <div className="row text-center">
          <div className="jumbotron">
            <p>IMAGENS</p>
          </div>
          <div className="col-sm-6">
            <div className="thumbnail slide jumbotron">
              <img
                src="https://i.ibb.co/7SVqWB1/imagem-2021-05-15-142930.png"
                alt="Server"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="thumbnail slide jumbotron">
              <img
                src="https://i.ibb.co/12xfY4t/imagem-2021-05-15-143034.png"
                alt="Cliente"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="thumbnail slide jumbotron">
              <img
                src="https://i.ibb.co/P1zhfQs/imagem-2021-05-15-143134.png"
                alt="Cliente"
              />
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="jumbotron">
            <p>DESCRIÇÃO</p>
          </div>
          <div id="about" className="container-fluid slide panel-footer">
            <div className="row">
              <div className="col-sm-5">
                <h2>Projeto</h2>
                <br />
                <p>Considerando 1 jogador ou n jogadores</p>
                <p>
                  Antes de iniciar o jogo o jogador deve informar o seu nome e
                  escolher a sua civilização:
                </p>
                <p>
                  (Acádia, Babilônia, Helenística, Mesopotâmica, Persa, Suméria)
                </p>
                <br />
                <p>O jogo inicia com uma vila criada contendo:</p>
                <p>5 aldeões</p>
                <p>1 prefeitura(criar novos aldeões e realizar evoluções)</p>
                <p>
                  0 templo(lançar pragas, realizar evoluções e produzir
                  oferendas de fé)
                </p>
                <p>0 maravilha: ganhar o jogo</p>
                <p>1 fazenda: produzir comida</p>
                <p>1 mina de ouro: produzir ouro</p>
                <p>150 unidades de comida</p>
                <p>100 unidades de ouro.</p>
                <p>0 oferendas de fé.</p>
                <br />

                <p>
                  Os comportamentos de cada entidade em particular são
                  sequenciais. Ou seja, não podem
                </p>
                <p>
                  ocorrer simultaneamente. Cada um possui um tempo associado e a
                  ação somente termina
                </p>
                <p>após decorrido este tempo</p>
                <br />
                <p>
                  jogador deve utilizar uma interface para dar ordens às
                  entidades, informando a entidade e a ordem:
                </p>
                <p>Aldeão: Selecionar o aldeão:</p>
                <p>Construir: selecionar o tipo da construção:</p>
                <p>Fazenda;</p>
                <p>Mina de ouro;</p>
                <p>Templo (somente 1).</p>
                <p>Cultivar: selecionar a fazenda;</p>
                <p>Minerar: selecionar a mina de ouro;</p>
                <p>Orar;</p>
                <p>Sacrificar.</p>
                <p>Prefeitura:</p>
                <p>Criar aldeão;</p>
                <p>Evoluir aldeão;</p>
                <p>Evoluir fazenda;</p>
                <p>Evoluir mina de ouro.</p>
                <p>Templo:</p>
                <p>Evoluir nuvem de gafanhotos;</p>
                <p>Evoluir morte dos primogênitos;</p>
                <p>Evoluir chuva de pedras;</p>

                <p>
                  Lançar nuvem de gafanhotos: selecionar o inimigo. Após a
                  evolução.
                </p>
                <p>
                  Lançar morte dos primogênitos: selecionar o inimigo. Após a
                  evolução.{" "}
                </p>
                <p>
                  Lançar chuva de pedras: selecionar o inimigo. Após a evolução.
                </p>
                <p>Evoluir proteção de nuvem de gafanhotos</p>
                <p>Evoluir proteção de morte dos primogênitos</p>
                <p>Evoluir proteção de chuva de pedras.</p>
              </div>
              <div className="col-sm-7">
                <h2>TECNOLOGIAS</h2>
                <p class="card-text"></p>
                <li>JAVA</li>
                <p>
                  <small class="text-muted">Projeto universitário</small>
                </p>
                <div className="col-sm-10">
                <div className="thumbnail slide jumbotron">
                  <img
                    src="https://i.ibb.co/1X8x3dw/imagem-2021-05-15-142302.png"
                    alt="Vila"
                  />
                </div>
              </div>
              <div className="col-sm-10">
                <div className="thumbnail slide jumbotron">
                  <img
                    src="https://i.ibb.co/Y0WGS5H/imagem-2021-05-15-142327.png"
                    alt="Prefeitura"
                  />
                </div>
              </div>
              <div className="col-sm-10">
                <div className="thumbnail slide jumbotron">
                  <img
                    src="https://i.ibb.co/kghPJgv/imagem-2021-05-15-142354.png"
                    alt="Templo"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JogoEstrategia;
