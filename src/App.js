
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add} from './components/Add';

import './App.css';
/* import './lib/font-awesome/css/all.min.css' */

function App() {
  return (
      <Router>    
        <div className="App">
            <Header />
            <Switch>
                <Route path="/watchlist" component={Watchlist}/>
                <Route path="/Watched" component={Watched} />
                <Route path="/Add" component={Add} />
            </Switch>
        </div>  
    </Router>
  );
}

export default App;
