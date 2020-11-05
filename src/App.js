import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Portfolio from './componentes/Portfolio'
import Contato from './componentes/Contato'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path='/' exact component={Inicio} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contato' component={Contato} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;