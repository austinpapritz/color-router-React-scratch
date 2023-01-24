import './App.css';

import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';

import RGB from './services/components/RGB/RGB.js';
import NotFound from './services/components/NotFound.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/rgb/244/55/55" />
          </Route>
          <Route exact path="/rgb/:red/:green/:blue" component={RGB} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
