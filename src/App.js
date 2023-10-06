import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import TrainList from './components/TrainList'; // Make sure this file exists
import TrainDetail from './components/TrainDetail'; // Make sure this file exists

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TrainList} />
        <Route path="/train/:id" component={TrainDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
