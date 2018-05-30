import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AccountRow from './AccountRow';

const account = '1-123-123-1234';

it('renders without crashing', () => {
  shallow(<AccountRow account={account} />);
});

test('AccountRow renders correctly when not available', () => {
  const tree = renderer.create(<AccountRow account={account} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('AccountRow renders correctly when is available', () => {
  const tree = renderer
    .create(<AccountRow account={account} isAvailable />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
