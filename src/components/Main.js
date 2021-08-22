import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.js';
import Header from './Header';
import Bio from './Bio';
import { Contact } from './Contact';

export const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/bio'} component={Bio} />
        <Route path={'/contact'} component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
