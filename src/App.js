import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Portfolio from './componentes/Portfolio'
import Contato from './componentes/Contato'

import Jogo_2d from './PortfolioItens/Jogo_2d'
import Jogo_da_forca from './PortfolioItens/Jogo_da_forca'
import UberEats_C from './PortfolioItens/UberEats_C'
import UberEats_Java from './PortfolioItens/UberEats_Java'
import Clone_do_spotify from './PortfolioItens/Clone_do_spotify'
import Cadastro_CRUD from './PortfolioItens/Cadastro_CRUD'
import Polishop from './PortfolioItens/Polishop'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path='/' exact component={Inicio} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/jogo_2d' component={Jogo_2d} />
          <Route path='/jogo-da-forca' component={Jogo_da_forca} />
          <Route path='/UberEats_C' component={UberEats_C} />
          <Route path='/UberEats_Java' component={UberEats_Java} />
          <Route path='/Clone_do_spotify' component={Clone_do_spotify} />
          <Route path='/Cadastro_CRUD' component={Cadastro_CRUD} />
          <Route path='/Polishop' component={Polishop} />
          <Route path='/contato' component={Contato} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
