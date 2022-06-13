import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Info from './components/Info.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*   <Route path="/info" component={Info} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
