import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RGB from './services/components/RGB.js';
import NotFound from './services/components/NotFound.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/:red/:green/:blue" component={RGB} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
