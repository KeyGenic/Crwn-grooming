import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import Shampoos from './pages/ShamPoos Page/shampoos.component';
import ShopPage from './pages/ShopPage/shopage.component';
import Header from './pages/header/header.component';
import signInAndSignUp from './pages/sign-in&sign-up.components.jsx/sign-in&sign-up.components';
import {Switch,Route} from 'react-router-dom'

class App extends Component{
   render(){
      return(
         <div>
            <Header />
            <Switch>
               <Route exact path = "/" component = {HomePage} />
               <Route path = "/shop" component = {ShopPage} />
               <Route path = "/signin" component = {signInAndSignUp} />
            </Switch>
         </div>
      );
   }
}
export default App;