import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Props } from './interfaces/interface';
import { HomePage } from './pages/HomePage/HomePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

import './index.scss';

export const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/profile/:urlName'} component={ProfilePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
