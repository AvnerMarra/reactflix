import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/App';
import CadastroVideo from './pages/cadastro/Video';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


const Pagina404 = () =>(<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


//serviceWorker.unregister();
