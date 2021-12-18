
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { UseStateValue } from './StateProvider';
import { useEffect } from 'react';
import { loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const Promise = loadStripe("pk_test_51JJbgbSEEuJgb3tpoeYvskjyE6v57RaXKFsbCTngaor9nJOJBZkjeurAGulDXKoRh1GOi1vvQc2AmM3vdKyIjUra00NVW2shRX");

function App() {
  const [{},dispatch] = UseStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>>>>',authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
          dispatch({
            type: 'SET_USER',
            user: null
        })

      }
    })
  
  }, [])
  return (
    <Router>
    <div className="App">
    
       <Switch>
       <Route path="/orders">
          <Header/>
          <Orders/>
          </Route>
        <Route path="/login">
          <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={Promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
 