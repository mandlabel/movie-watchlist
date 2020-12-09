
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* ------------------------------------------------ */
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Search} from './components/Search';
import {Upcoming} from './components/Upcoming';
import {GlobalProvider} from './context/GlobalState';
import './App.css';
/* ------------------------------------------------ */
function App() {
  return (

    <GlobalProvider>
      <Router>    
        <div className="App">
            <Header />
            <Switch>
                <Route path="/watchlist" component={Watchlist}/>
                <Route path="/upcoming" component={Upcoming}/>
                <Route path="/" component={Search} />
                
            </Switch>
        </div>  
      </Router>
    </GlobalProvider>
  );
}

export default App;
