import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import IconButton from './IconButton';
import Icon from './Icon';
import './BillRow.css';

const BillRow = props => {
  const { account, paid, name, amount } = props;
  return (
    <div className="BillRow">
      <Icon
        src="radio_button_checked"
        iconClass={paid ? 'BillRow__icon__paid' : 'BillRow__icon__not__paid'}
      />
      <div>
        <Text htmlTag="span">{account}</Text>
        <Text htmlTag="div">{name}</Text>
      </div>
      <div>
        <IconButton color={paid ? 'green' : 'red'}>{`$ ${amount}`}</IconButton>
        <div
          className={paid ? 'BillRow__bill__paid' : 'BillRow__bill__not__paid'}
        >
          <Text htmlTag="div" small color="inherit">
            {paid ? 'Bill paid' : 'Bill not paid'}
          </Text>
        </div>
      </div>
    </div>
  );
};

BillRow.propTypes = {
  account: PropTypes.string.isRequired,
  paid: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default BillRow;
