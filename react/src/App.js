import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Fishes from './components/Fishes';
import Sellers from './components/Sellers';
import Order from './components/Order';


function App() {  

  return (
    <Fragment>
      <BrowserRouter>
            <Switch>
            <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login} />
             <Route path="/fishes" component={Fishes}/>
             <Route path="/sellers" component={Sellers}/>
             <Route path="/orders" component={Order}/>
             <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

