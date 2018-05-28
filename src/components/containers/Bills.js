import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterBar from '../views/FilterBar';
import Panel from '../views/Panel';
import BillRow from '../views/BillRow';
import Text from '../views/Text';
import './Bills.css';

class Bills extends Component {
  componentDidMount() {}

  render() {
    const { bills } = this.props;
    return (
      <Panel>
        <FilterBar title="My Bills" />
        {bills.map(bill => (
          <BillRow
            key={bill.account}
            account={bill.account}
            paid={bill.paid}
            name={bill.name}
            amount={bill.amount}
          />
        ))}
        <div className="Bill__See__More">
          <Text color="disabled" small>
            See More
          </Text>
        </div>
      </Panel>
    );
  }
}

Bills.propTypes = {
  bills: PropTypes.arrayOf(
    PropTypes.shape({
      account: PropTypes.string,
      paid: PropTypes.bool,
      name: PropTypes.string,
      amount: PropTypes.number
    })
  )
};

Bills.defaultProps = {
  bills: [
    {
      account: '+1-386-575-1232',
      paid: true,
      name: 'Patty Francisco',
      amount: 192
    },
    {
      account: '+1-549-746-1365',
      paid: false,
      name: 'Jenee Withey',
      amount: 144
    }
  ]
};

export default Bills;
