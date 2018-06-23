// @flow

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/es/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './style';
import Board from '../../libs/react-trello/components/Board';
import CustomLaneHeader from '../../components/List/CustomLaneHeader';
import CustomCard from '../../components/List/CustomCard';
import type { List } from '../../types/List';
import type { Item } from '../../types/Item';

type Props = {
  classes: any,
  lists: List[],
  itemsByList: {
    [listId: string]: Item[],
  },
};

class Lists extends PureComponent<Props> {
  _formatItem = (item: Item) => {
    return {
      item,
      title: item.name,
      id: item.id,
      classes: this.props.classes,
    };
  };

  _formatLists = () => {
    const { lists, itemsByList } = this.props;

    return {
      lanes: lists.map((list: List) => ({
        id: list.id,
        title: list.name,
        cards: itemsByList[list.id].map(this._formatItem),
        nbResults: itemsByList[list.id].length,
        loading: !isLoaded(itemsByList[list.id]),
      }))
    };
  };

  handleDrag = (cardId: string, sourceLaneId: string, targetLaneId: string) => {
    const { firestore } = this.props;

    if (sourceLaneId !== targetLaneId) {
      console.log('need update');
      const itemUpdates =  {
        listId: targetLaneId,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      };

      firestore.update({ collection: 'items', doc: cardId }, itemUpdates);
    }
  };

  renderLoading = () => (
    <div className={this.props.classes.loadingContainer}>
      <CircularProgress />
    </div>
  );

  render() {
    const { classes, lists, itemsByList } = this.props;

    const areItemsLoaded = !lists.find(list => !isLoaded(itemsByList[list.id]));

    return areItemsLoaded ? (
      <div className={classes.content}>
        <Grid item xs={12}>
          <Board
            data={this._formatLists()}
            extraClasses={{
              board: classes.board,
              lane: classes.lane,
              laneDraggableZone: classes.laneDraggableZone,
              card: classes.card,
            }}
            customLaneHeader={<CustomLaneHeader/>}
            customLaneFooter={null}
            customCardLayout
            draggable
            onCardClick={() => 1}
            handleDragEnd={this.handleDrag}
          >
            <CustomCard/>
          </Board>
        </Grid>
      </div>
    ) : this.renderLoading();
  }
}

export default compose(
  withStyles(styles),
  firestoreConnect((props: Props) =>
    props.lists.map((list: List) => ({
      collection: 'items',
      storeAs: `items_${list.id}`,
      orderBy: 'order',
      where: ['listId', '==', list.id],
    }))
  ),
  connect((state, props) => {
    const itemsByList = {};
    for (const list of props.lists) {
      itemsByList[list.id] = state.firestore.ordered[`items_${list.id}`];
    }
    return {
      itemsByList,
    };
  })
)(Lists);
