
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Search} from './components/Search';
import {GlobalProvider} from './context/GlobalState';

import './App.css';
/* import './lib/font-awesome/css/all.min.css' */

function App() {
  return (

    <GlobalProvider>
      <Router>    
        <div className="App">
            <Header />
            <Switch>
                <Route path="/watchlist" component={Watchlist}/>
                <Route path="/" component={Search} />
            </Switch>
        </div>  
      </Router>
    </GlobalProvider>
  );
}

export default App;
