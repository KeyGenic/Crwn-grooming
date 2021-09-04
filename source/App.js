import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import Shampoos from './pages/ShamPoos Page/shampoos.component';
import ShopPage from './pages/ShopPage/shopage.component';
import {Switch,Route} from 'react-router-dom'

class App extends Component{
   render(){
      return(
         <div>
            <Switch>
               <Route exact path = "/" component = {HomePage} />
               <Route path = "/shop" component = {ShopPage} />
            </Switch>
         </div>
      );
   }
}
export default App;