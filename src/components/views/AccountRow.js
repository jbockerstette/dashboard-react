import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import IconButton from './IconButton';
import './AccountRow.css';

const AccountRow = props => {
  const { account, isAvailable } = props;
  const color = isAvailable ? 'primary' : 'disabled';
  const status = isAvailable ? 'Available' : 'Not Available';
  const btnText = isAvailable ? 'Edit' : 'Delete';
  return (
    <div className="AccountRow">
      <div>
        <Text color={color}>{account}</Text>
        <Text htmlTag="div" small color={color}>
          {status}
        </Text>
      </div>
      <IconButton color="red">{btnText}</IconButton>
    </div>
  );
};

AccountRow.propTypes = {
  account: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool
};

AccountRow.defaultProps = {
  isAvailable: false
};

export default AccountRow;
