import React from 'react'

const UberEats_C = props => {
    return(
        <div>
            <div className='thumbnail panel-footer bg-grey slide'>
                <div className='row text-center'>
                    <div className="jumbotron">
                        <p>IMAGENS</p>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/G9zzRTy/imagem-2020-11-07-093621.png' alt='UberEats em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/0KfLMdx/imagem-2020-11-07-093659.png' alt='UberEats em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-7'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/B6wdkJ6/imagem-2020-11-07-093748.png' alt='UberEats em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/rHH68Tz/imagem-2020-11-07-093932.png' alt='UberEats em C' width='400' height='300' />
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <div className='thumbnail slide jumbotron'>
                            <img src='https://i.ibb.co/ScrRYrK/imagem-2020-11-07-093951.png' alt='UberEats em C' width='400' height='300' />
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
                                <p>O "ToComFome" é um clone do UberEats pensado em todas as plataformas, tanto para clientes,entregadores e restaurantes.</p>
                                <p>Todos sincronizados por arquivos e logins diferentes, sem limitações, uma conta pode ser dono de um restaurantes,entregador e cliente.</p>
                                <p>Um sistema exclusivo para cada plataforma e se interagindo por arquivos</p>
                                <p>Um projeto em dupla, desenvolvido com Igor.</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>C</li>
                                <a href="https://github.com/GabriellArthur/TOCOMFOME"><button type="button" class="btn btn-outline-primary"> Código</button></a>   
                                <p><small class="text-muted">Projeto universitário</small></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default UberEats_C