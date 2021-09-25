import React, { Component, useRef } from 'react';
import HomePage from './pages/homepage/homepage.component';
import checkoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/ShopPage/shopage.component';
import Header from './pages/header/header.component';
import SignInAndSignUp from './pages/sign-in&sign-up.components.jsx/sign-in&sign-up.components';
import { auth,userProfileDoc } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/user-reducer/user.action';
import { getCollectionOverview } from './Redux/shop-reducer/shop-selector';
import { connect } from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { getCurrentUser } from './Redux/user-reducer/users.selectors';

class App extends Component{
   unsubscribeFromAuth = null

   componentDidMount(){
      const {setCurrentUser} = this.props
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
         if(userAuth){
            const userRef = await userProfileDoc(userAuth)
            userRef.onSnapshot(snapShot => {
             setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
              })
            })
        
         }else{
            setCurrentUser(userAuth)
         }
      })
   }

   componentWillUnmount(){
      this.unsubscribeFromAuth()
   }

   render(){
      return(
         <div>
            <Header />
            <Switch>
               <Route exact path = "/" component = {HomePage} />
               <Route path = "/shop" component = {ShopPage} />
               <Route exact path = "/checkout" component = {checkoutPage} />
               <Route exact path = "/signin" render = {() => {
                  return this.props.currentUser ?
                  <Redirect to = "/" /> : <SignInAndSignUp />
               }} />
            </Switch>
         </div>
      );
   }
}

const statsToProps = createStructuredSelector({
   setCurrentUser : getCurrentUser
})

const setDispacthc = (dispatch) => ({
   setCurrentUser: user => {
      dispatch(setCurrentUser(user))
   }
})

export default connect(statsToProps,setDispacthc)(App);