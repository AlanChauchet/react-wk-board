import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import { ButtonWithLoader } from './index';

storiesOf('components/ButtonWithLoader', module)
  .add('with text', () => (
    <ButtonWithLoader onClick={action('clicked')}>
      Hello Button
    </ButtonWithLoader>
  ))
  .add('with some emoji', () => (
    <ButtonWithLoader onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </ButtonWithLoader>
  ))
  .add('raised with text', () => (
    <ButtonWithLoader
      variant="raised"
      color="primary"
      onClick={action('clicked')}
    >
      Hello Button
    </ButtonWithLoader>
  ))
  .add('raised with some emoji', () => (
    <ButtonWithLoader
      variant="raised"
      color="primary"
      onClick={action('clicked')}
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </ButtonWithLoader>
  ))
  .add('loading', () => (
    <ButtonWithLoader
      variant="raised"
      color="primary"
      loading
      onClick={action('clicked')}
    >
      Hello Button
    </ButtonWithLoader>
  ))
  .add('dynamic', () => (
    <ButtonWithLoader
      variant={select('Variant', ['flat', 'outlined', 'raised', 'fab'], 'flat')}
      color={select('Color', ['default', 'primary', 'secondary'])}
      loading={boolean('Loading', false)}
      onClick={action('clicked')}
    >
      {text('Content', 'Content')}
    </ButtonWithLoader>
  ));
