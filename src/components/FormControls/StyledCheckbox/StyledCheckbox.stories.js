import React from 'react';
import { storiesOf } from '@storybook/react';

import { StyledCheckbox } from './index';

storiesOf('components/StyledCheckbox', module)
  .add('simple', () => <StyledCheckbox label="Test" checked={false} />)
  .add('checked', () => <StyledCheckbox label="Test" checked={true} />)
  .add('dynamic', () => <StyledCheckbox label="Test" />);
