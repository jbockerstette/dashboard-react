import React from 'react';
import Accounts from '../containers/Accounts';
import Bills from '../containers/Bills';
import FadeIn from './FadeIn';
import Profile from '../containers/Profile';
import './Dashboard.css';

const Dashboard = props => (
  <React.Fragment>
    <div className="Dashboard-accounts">
      <FadeIn>
        <Accounts {...props} />
      </FadeIn>
    </div>
    <div className="Dashboard-bills">
      <FadeIn>
        <Bills {...props} />
      </FadeIn>
    </div>
    <div className="Dashboard-profile">
      <FadeIn>
        <Profile {...props} />
      </FadeIn>
    </div>
  </React.Fragment>
);

export default Dashboard;
