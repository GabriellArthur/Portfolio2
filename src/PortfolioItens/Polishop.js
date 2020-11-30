import React from 'react'

const Polishop = props => {
    return(
        <div>
            <div className='thumbnail panel-footer bg-grey slide'>
                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>IMAGENS</p>
                    </div>
                    <div className='col-sm-8'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/10jn44J/Diagrama.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/8mt8zgy/Diagrama-Fav-Presnt.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/fMhRPMY/Diagrama-Produtos.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/8zBkD5Q/produtos.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/JRRynXn/Diagrama-Usuario.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/drXMxvg/usuario.png' alt='Jogo de zombis' width='400' height='300' />
                        </div>
                    </div>
                </div>

                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>DESCRIÇÃO</p>
                    </div>
                    <div id='about' className='container-fluid slide panel-footer'>
                        <div className='row'>
                            <div className='col-sm-8'>
                                <h2>Projeto</h2><br />
                                <p>Um sistema para vendas de produtos
                                    eletrodomésticos, podendo filtrá-los por marcas ou categorias, adicionar ou remover
                                    do carrinho, favoritos ou lista de presentes. O sistema também conta com as
                                    funcionalidades de um site convencional, podendo comprar no sistema e retirar na
                                    loja, entregar na sua residência e agendar entregas, pagar com dois cartões de
                                    crédito e compras á vista tem 5% de desconto.</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>JAVA</li>
                                <p><small class="text-muted">Projeto universitário</small></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Polishop