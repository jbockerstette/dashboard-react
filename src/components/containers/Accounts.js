import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterBar from '../views/FilterBar';
import Panel from '../views/Panel';
import './Accounts.css';
import AccountRow from '../views/AccountRow';

class Accounts extends Component {
  componentDidMount() {}

  render() {
    const { accounts } = this.props;
    return (
      <Panel>
        <FilterBar title="My Accounts" />
        {accounts.map(acc => (
          <AccountRow account={acc.account} isAvailable={acc.isAvailable} />
        ))}
      </Panel>
    );
  }
}

Accounts.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      account: PropTypes.string,
      isAvailable: PropTypes.bool
    })
  )
};

Accounts.defaultProps = {
  accounts: [
    { account: '+1-386-575-1232', isAvailable: true },
    { account: '+1-844-699-4678', isAvailable: false }
  ]
};

export default Accounts;
