// @flow

import React, { PureComponent } from 'react';
import { Router, Redirect } from '@reach/router';
import Auth from '../pages/Auth';
import Board from '../pages/Board';

type Props = {};

export const BASE_BOARD_ID = 'QJxEQGGjaGSbqb2P7U8X';

const AutoRedirect = () => <Redirect to={`board/${BASE_BOARD_ID}`} noThrow />;

export class MainRouter extends PureComponent<Props> {
  render() {
    return (
      <Router>
        <Auth path="/">
          <Board path="board/:boardId" />
          <AutoRedirect default />
        </Auth>
        <Redirect from="/" to={`board/${BASE_BOARD_ID}`} noThrow />
      </Router>
    );
  }
}
