import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css'
import Signup from './components/signup';
import Executive from './components/Executive';
import Manager from './components/Manager';
import Medicine from './components/Medicine';
import Sales from './components/salseExecutive';
import Order from './components/Order';
import Display from './components/displayOrders';

class App extends Component {
  render() { 
   return ( 
    <HashRouter basename="/">
      <Route exact path="/" component={Signup}/>
      <Route exact path="/Manager" component={Manager}/>
      <Route exact path="/Medicine" component={Medicine}/>
      <Route exact path="/salesExe" component={Sales}/>
      <Route exact path="/Executive" component={Executive}/>
      <Route exact path="/order" component={Order}/>
      <Route exact path="/display" component={Display}/>
    </HashRouter>
     
    );
  }
}
 
export default App;