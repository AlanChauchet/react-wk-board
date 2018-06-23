// @flow

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './style';
import BoardHeader from '../../components/BoardHeader';
import type { Board } from '../../types/Board';
import type { List } from '../../types/List';

type Props = {
  classes: any,
  boardId: string,
  board?: Board,
  lists: List[],
};

class BoardPage extends PureComponent<Props> {
  render() {
    const { classes, board } = this.props;
    const isBoardLoaded = isLoaded(this.props.board);

    return isBoardLoaded ? (
      <div>
        <BoardHeader board={board}/>
      </div>
    ) : (
      <div className={classes.loadingContainer}>
        <CircularProgress className={classes.loader} />
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  firestoreConnect((props: Props) => [{
    collection: 'boards',
    doc: props.boardId,
  }, {
    collection: 'lists',
    orderBy: 'order',
    where: ['boardId', '==', props.boardId],
    storeAs: `lists_${props.boardId}`
  }]),
  connect((state, props) => ({
    board: state.firestore.data.boards && state.firestore.data.boards[props.boardId],
    lists: state.firestore.ordered[`lists_${props.boardId}`] || []
  }))
)(BoardPage);
