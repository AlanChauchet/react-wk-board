// @flow

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/es/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import findIndex from 'lodash/findIndex';

import styles from './style';
import AddFormModal from '../../components/AddFormModal';
import Board from '../../libs/react-trello/components/Board';
import CustomLaneHeader from '../../components/List/CustomLaneHeader';
import CustomCard from '../../components/List/CustomCard';
import FixedAddButton from '../../components/FixedAddButton';
import { Creators as SnackbarCreators } from '../../actions/snackbar';
import type { List } from '../../types/List';
import type { Item } from '../../types/Item';
import type { Dispatch } from '../../types/Redux';

type Props = {
  classes: any,
  lists: List[],
  itemsByList: {
    [listId: string]: Item[],
  },
};

type State = {
  addFormOpen: boolean,
};

class Lists extends PureComponent<Props, State> {
  state: State = {
    addFormOpen: false,
  };

  _formatItem = (item: Item) => {
    return {
      item,
      onBellTapped: () => this.onBellTapped(item),
      title: item.name,
      id: item.id,
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
      })),
    };
  };

  openAddForm = () => this.setState({ addFormOpen: true });
  closeAddForm = () => this.setState({ addFormOpen: false });

  createItem = (item: Partial<Item>) => {
    const { lists, itemsByList, firestore } = this.props;

    return (
      lists.length &&
      firestore
        .add(
          { collection: 'items' },
          {
            ...item,
            nbMessages: 0,
            nbLikes: 0,
            nbEmails: 0,
            listId: this.props.lists[0].id,
            notificationsEnabled: true,
            order: itemsByList[this.props.lists[0].id].length + 1,
            createdAt: firestore.FieldValue.serverTimestamp(),
          }
        )
        .then(this.closeAddForm)
        .then(() => this.props.showMessage('Item added'))
    );
  };

  onBellTapped = (item: Item) => {
    const { firestore } = this.props;

    firestore.update(
      { collection: 'items', doc: item.id },
      {
        notificationsEnabled: !item.notificationsEnabled,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      }
    );
  };

  // Updates the order of the items within a list without updating the dropped item
  updateItemsOrder = (skipItem: string, items: Item[], lane: Object) => {
    const { firestore } = this.props;

    for (const item of items) {
      let index;
      if (
        item.id !== skipItem &&
        (index = findIndex(lane.cards, { id: item.id })) > -1
      ) {
        if (item.order !== index + 1) {
          firestore.update(
            { collection: 'items', doc: item.id },
            {
              order: index + 1,
            }
          );
        }
      }
    }
  };

  // Updates an item after it has been dropped within either a different list or a different order
  handleDrag = (
    cardId: string,
    sourceLaneId: string,
    targetLaneId: string,
    order: number,
    lanes: any[]
  ) => {
    const { firestore, itemsByList } = this.props;

    const item = itemsByList[sourceLaneId].find((item) => item.id === cardId);
    if (sourceLaneId !== targetLaneId || (item && item.order !== order + 1)) {
      firestore.update(
        { collection: 'items', doc: cardId },
        {
          listId: targetLaneId,
          updatedAt: firestore.FieldValue.serverTimestamp(),
          order: order + 1,
        }
      );
      this.updateItemsOrder(
        cardId,
        itemsByList[targetLaneId],
        lanes.find((lane) => lane.id === targetLaneId)
      );
      if (sourceLaneId !== targetLaneId) {
        this.updateItemsOrder(
          cardId,
          itemsByList[sourceLaneId],
          lanes.find((lane) => lane.id === sourceLaneId)
        );
      }
    }
  };

  renderLoading = () => (
    <div className={this.props.classes.loadingContainer}>
      <CircularProgress />
    </div>
  );

  render() {
    const { classes, lists, itemsByList } = this.props;
    const { addFormOpen } = this.state;

    const areItemsLoaded = !lists.find(
      (list) => !isLoaded(itemsByList[list.id])
    );

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
              cardDragging: classes.cardDragging,
            }}
            customLaneHeader={<CustomLaneHeader />}
            customLaneFooter={null}
            customCardLayout
            draggable
            onCardClick={() => 1}
            handleDragEnd={this.handleDrag}
            laneSortFunction={(a, b) => a.item.order - b.item.order}
          >
            <CustomCard />
          </Board>
        </Grid>
        <FixedAddButton onClick={this.openAddForm} />
        <AddFormModal
          open={addFormOpen}
          handleClose={this.closeAddForm}
          onSubmit={this.createItem}
          initialValues={{
            avatar:
              'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg',
          }}
        />
      </div>
    ) : (
      this.renderLoading()
    );
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
  connect(
    (state, props) => {
      const itemsByList = {};
      for (const list of props.lists) {
        itemsByList[list.id] = state.firestore.ordered[`items_${list.id}`];
      }
      return {
        itemsByList,
      };
    },
    (dispatch: Dispatch) => ({
      showMessage: (message: string) =>
        dispatch(SnackbarCreators.show({ message })),
    })
  )
)(Lists);
