import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ButtonWithLoader } from './index';

it('renders a button which can load', () => {
  const button = mount(
    <ButtonWithLoader loading={false}>Test</ButtonWithLoader>
  );
  expect(button.prop('loading')).toBeFalsy();
  expect(button.find(CircularProgress).exists()).toEqual(false);
  expect(button).toMatchSnapshot('not loading state');
  button.setProps({
    loading: true,
  });
  expect(button.prop('loading')).toBeTruthy();
  expect(button).toMatchSnapshot('loading state');
  expect(button.find(CircularProgress).exists()).toEqual(true);
  button.unmount();
});
