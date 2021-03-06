import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Raindrop from '../pages/Raindrop'
import './styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Raindrop}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
