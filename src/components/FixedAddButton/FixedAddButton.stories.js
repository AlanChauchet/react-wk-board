import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { FixedAddButton } from './index';

storiesOf('components/FixedAddButton', module)
  .addDecorator(StoryRouter())
  .add('default', () => <FixedAddButton />);
