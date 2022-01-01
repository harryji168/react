import './App.css';
import React, { useState, useEffect } from 'react';
import ProductShowPage from './components/ProductShowPage';
import ProductIndexPage from './components/ProductIndexPage';
import { BrowserRouter, Route, Switch , Redirect,useHistory  } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductNewPage from './components/ProductNewPage';
import SignInPage from './components/SignInPage'
import { Session } from './request';
import AuthRoute from './components/AuthRoute' 
import { children } from 'cheerio/lib/api/traversing';
export default function App(props) { 
   
  return (
    <BrowserRouter>
       <Amazon  />
    </BrowserRouter>
    )
}

function Amazon() {
  let history = useHistory();
  const [user, setUser] = useState({});
  useEffect(() => {
    getCurrent();
  }, []);
  const getCurrent = () => {
    
    Session.current().then(data => {
      setUser(data.user);   
     // history.push("/products");           
    }).then( data=>{
      history.push("/products")
    })

          //console.log("dff");
         // histroy.push("/products")
         // return <Redirect to="/products" />;
     
  }
  const signOut = () => {
    Session.destroy().then(() => {
      setUser(null)
    });
  }
  return (
    <BrowserRouter>
      <NavBar current_user={user} onSignOut={signOut} />
      <Switch>
        {/* /products/12 */}
        <Route path='/' exact component={Home} />
        <AuthRoute
          isAuthenticated={user}
          path="/products/"
          exact
          component={ProductIndexPage}
        />
        <AuthRoute
          isAuthenticated={user}
          path="/products/new"
          exact
          component={ProductNewPage}
        />
        <AuthRoute
          isAuthenticated={user}
          path="/products/:id"
          exact
          component={ProductShowPage}
        />
        <Route
          path="/sign_in"
          exact
          render={routeProps => (
            <SignInPage onSignIn={getCurrent} {...routeProps} />
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}
