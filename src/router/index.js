// @flow

import React, { PureComponent } from 'react';
import { Router, Redirect } from '@reach/router';
import Auth from '../pages/Auth';
import Board from '../pages/Board';

type Props = {};

export class MainRouter extends PureComponent<Props> {
  render() {
    return (
      <Router>
        <Auth path="/">
          <Board path="board/:boardId" />
        </Auth>
        <Redirect from="/" to="board/QJxEQGGjaGSbqb2P7U8X" noThrow />
      </Router>
    );
  }
}
