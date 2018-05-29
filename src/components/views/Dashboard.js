import React from 'react';
import Accounts from '../containers/Accounts';
import Bills from '../containers/Bills';
import Profile from '../containers/Profile';
import './Dashboard.css';

const Dashboard = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="Dashboard-accounts">
        <Accounts {...props} />
      </div>
      <div className="Dashboard-bills">
        <Bills {...props} />
      </div>
      <div className="Dashboard-profile">
        <Profile {...props} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
