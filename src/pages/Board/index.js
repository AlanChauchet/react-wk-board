// @flow

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './style';
import BoardHeader from '../../components/BoardHeader';
import Lists from '../../containers/Lists';
import type { Board } from '../../types/Board';
import type { List } from '../../types/List';

type Props = {
  classes: any,
  boardId: string,
  board?: Board,
  lists?: List[],
};

class BoardPage extends PureComponent<Props> {
  renderLoading = () => (
    <div className={this.props.classes.loadingContainer}>
      <CircularProgress />
    </div>
  );

  render() {
    const { classes, board, lists } = this.props;

    const isBoardLoaded = isLoaded(this.props.board);
    const isListLoaded = isLoaded(this.props.lists);

    return isBoardLoaded ? (
      <div>
        <BoardHeader board={board}/>
        <div className={classes.content}>
          {isListLoaded ? <Lists lists={lists}/> : this.renderLoading()}
        </div>
      </div>
    ) : this.renderLoading();
  }
}

export default compose(
  withStyles(styles),
  firestoreConnect((props: Props) => [{
    collection: 'boards',
    doc: props.boardId,
  }, {
    collection: 'lists',
    storeAs: `lists_${props.boardId}`,
    orderBy: 'order',
    where: ['boardId', '==', props.boardId],
  }]),
  connect((state, props) => ({
    board: state.firestore.data.boards && state.firestore.data.boards[props.boardId],
    lists: state.firestore.ordered[`lists_${props.boardId}`],
  }))
)(BoardPage);
