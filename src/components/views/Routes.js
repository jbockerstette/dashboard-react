import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Profile from '../containers/Profile';
import Accounts from '../containers/Accounts';
import Bills from '../containers/Bills';
import FadeIn from '../views/FadeIn';

const Routes = props => (
  <React.Fragment>
    <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
    <Route
      path="/dashboard"
      render={() => (
        <React.Fragment>
          <div className="App-dashboard-accounts">
            <FadeIn>
              <Accounts />
            </FadeIn>
          </div>
          <div className="App-dashboard-bills">
            <FadeIn>
              <Bills />
            </FadeIn>
          </div>
          <div className="App-dashboard-profile">
            <FadeIn>
              <Profile {...props} />
            </FadeIn>
          </div>
        </React.Fragment>
      )}
    />
    <Route
      path="/accounts"
      render={() => (
        <div className="App-content-full-width">
          <FadeIn>
            <Accounts />
          </FadeIn>
        </div>
      )}
    />
    <Route
      path="/bills"
      render={() => (
        <div className="App-content-full-width">
          <FadeIn>
            <Bills />
          </FadeIn>
        </div>
      )}
    />
  </React.Fragment>
);

export default Routes;
