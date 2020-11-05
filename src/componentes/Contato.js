import React from 'react'

const Contato = props => {
    return (
        <div id="contact" className='container-fluid bg-grey slide panel-hover'>
            <div className='row'>
                <div className="col-sm-5 jumbotron">
                    <p>Entre em contato</p>
                    <p><span className="glyphicon glyphicon-map-marker"></span> Taguatinga, DF</p>
                    <p><span className="glyphicon glyphicon-phone"></span> +55 991877872</p>
                    <p><span className="glyphicon glyphicon-envelope"></span> gabriel.arthur2@gmail.com</p>
                    <p><span className="glyphicon glyphicon-send "></span><a href='https://github.com/GabriellArthur'> GITHUB </a></p>
                    <p><span className="glyphicon glyphicon-send"></span><a href='https://www.linkedin.com/in/gabriellarthur/'> LINKEDIN</a></p>
                </div>
            </div><br/>
        </div>
    )
}

export default Contato