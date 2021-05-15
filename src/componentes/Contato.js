import React from 'react'

const Contato = props => {
    return (
        <div id="contact" className='container-fluid slide panel-hover jumbotron navbar text-center'>
            <p><span className="glyphicon glyphicon-map-marker"></span> Taguatinga, DF</p>
            <p><span className="glyphicon glyphicon-phone"></span> +55(61)99187-7872</p>
            <p><span className="glyphicon glyphicon-envelope"></span> gabriel.arthur2@gmail.com</p>
            <p><span className="glyphicon glyphicon-send "></span><a className='btn btn-primary' href='https://github.com/GabriellArthur'> GITHUB </a></p>
            <p><span className="glyphicon glyphicon-send"></span><a className='btn btn-primary' href='https://www.linkedin.com/in/gabriellarthur/'> LINKEDIN</a></p>
        </div>
    )
}

export default Contato