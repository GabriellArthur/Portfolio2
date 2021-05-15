import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho'
import Inicial from './componentes/Inicial'
import Sobre from './componentes/Sobre'
import Portfolio from './componentes/Portfolio'
import Contato from './componentes/Contato'

import Jogo_2d from './PortfolioItens/Jogo_2d'
import Jogo_da_forca from './PortfolioItens/Jogo_da_forca'
import UberEats_C from './PortfolioItens/UberEats_C'
import UberEats_Java from './PortfolioItens/UberEats_Java'
import Clone_do_spotify from './PortfolioItens/Clone_do_spotify'
import Cadastro_CRUD from './PortfolioItens/Cadastro_CRUD'
import Polishop from './PortfolioItens/Polishop'
import HomePage_facebook from './PortfolioItens/HomePage_facebook'
import AplicativoSimples from './PortfolioItens/AplicativoSimples'
import ConversorDeMoedas from './PortfolioItens/ConversorDeMoeda'
import Login_Register from './PortfolioItens/Login_Register'
import todoList from './PortfolioItens/todoList'
import JogoEstrategia from './PortfolioItens/JogoEstrategia'

import Portfolio_Java from './Portifolios/Portfolio_Java'
import Portfolio_BancoDeDados from './Portifolios/Portfolio_BancoDeDados'
import Portfolio_JS from './Portifolios/Portfolio_JS'
import Portfolio_C from './Portifolios/Portfolio_C'
import Portfolio_Flutter from './Portifolios/Portifolio_Flutter'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Cabecalho />
         <Route path='/' exact component={Inicial} />
         <Route path='/About' exact component={Sobre} />
         <Route path='/Contact' component={Contato} />
         <Route path='/Portfolio' component={Portfolio} />

         <Route path='/jogo_2d' component={Jogo_2d} />
         <Route path='/jogo-da-forca' component={Jogo_da_forca} />
         <Route path='/UberEats_C' component={UberEats_C} />
         <Route path='/UberEats_Java' component={UberEats_Java} />
         <Route path='/Clone_do_spotify' component={Clone_do_spotify} />
         <Route path='/Cadastro_CRUD' component={Cadastro_CRUD} />
         <Route path='/Polishop' component={Polishop} />
         <Route path='/HomePage_facebook' component={HomePage_facebook} />
         <Route path='/AplicativoSimples' component={AplicativoSimples} />
         <Route path='/ConversorDeMoedas' component={ConversorDeMoedas} />
         <Route path='/Login_Register' component={Login_Register} />
         <Route path='/todoList' component={todoList} />
         <Route path='/JogoEstrategia' component={JogoEstrategia} />

         <Route path='/Java' component={Portfolio_Java} />
         <Route path='/BandoDeDados' component={Portfolio_BancoDeDados} />
         <Route path='/Js' component={Portfolio_JS} />
         <Route path='/C' component={Portfolio_C} />
         <Route path='/Flutter' component={Portfolio_Flutter}/>
         <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
