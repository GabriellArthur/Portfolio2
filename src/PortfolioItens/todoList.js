import React from 'react'
import ReactPlayer from 'react-player'

const todoList = props => {
    return(
        <div>
            <div className='thumbnail panel-footer bg-grey slide'>
                <div className='row'>
                    <div className="jumbotron text-center">
                        <p>Video</p>
                    </div>
                    <div className='video'>
                        <ReactPlayer width='880px' height='500px' controls url='https://youtu.be/g1-wWYLI2MI'/>
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
                                <p>Um todo-list com uma aplicação publica(back-end)</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2>TECNOLOGIAS</h2>
                                <p class="card-text"></p>
                                <li>Dart</li>
                                <li>Flutter</li>
                                <p><small class="text-muted">Projeto pessoal</small></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default todoList