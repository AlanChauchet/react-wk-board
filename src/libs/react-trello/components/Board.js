import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import isEqual from 'lodash/isEqual';
import { cx } from 'emotion';
import { DragDropContext } from 'react-beautiful-dnd';

import { BoardDiv } from '../styles/Base';
import Lane from './Lane';
import Lh from '../helpers/LaneHelper';

export default class Board extends Component {
  state = {
    lanes: [],
    lastData: null,
  };

  wireEventBus = () => {
    const { eventBusHandle } = this.props;
    let eventBus = {
      publish: (event) => {
        switch (event.type) {
          case 'ADD_CARD':
            return this.setState(
              Lh.appendCardToLane(this.state, {
                laneId: event.laneId,
                card: event.card,
              })
            );
          case 'REMOVE_CARD':
            return this.setState(
              Lh.removeCardFromLane(this.state, {
                laneId: event.laneId,
                cardId: event.cardId,
              })
            );
          case 'REFRESH_BOARD':
            return this.setState(Lh.initialiseLanes(this.state, event.data));
          case 'MOVE_CARD':
            return this.setState(
              Lh.moveCardAcrossLanes(this.state, {
                fromLaneId: event.fromLaneId,
                toLaneId: event.toLaneId,
                cardId: event.cardId,
                index: event.index,
              })
            );
          default:
        }
      },
    };
    eventBusHandle(eventBus);
  };

  componentDidMount() {
    const { eventBusHandle } = this.props;
    this.setState(Lh.initialiseLanes(this.state, this.props.data));
    if (eventBusHandle) {
      this.wireEventBus();
    }
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.data && !isEqual(nextProps.data, prevState.lastData)) {
      return {
        ...Lh.initialiseLanes(prevState, nextProps.data),
        lastData: nextProps.data,
      };
    }
    return null;
  }

  onDragStart = (card) => {
    const { handleDragStart } = this.props;
    handleDragStart(card.draggableId, card.source.droppableId);
  };

  onDragEnd = (result) => {
    const { handleDragEnd } = this.props;
    const { source, destination, draggableId } = result;
    if (destination) {
      this.setState(
        Lh.moveCardAcrossLanes(this.state, {
          fromLaneId: source.droppableId,
          toLaneId: destination.droppableId,
          cardId: draggableId,
          index: destination.index,
        })
      );
      handleDragEnd(
        draggableId,
        source.droppableId,
        destination.droppableId,
        destination.index,
        this.state.lanes
      );
    }
  };

  paginateLane = ({ laneId, newCards, nextPage }) => {
    this.setState(Lh.paginateLane(this.state, { laneId, newCards, nextPage }));
  };

  render() {
    const { style, extraClasses } = this.props;
    const { lanes } = this.state;

    const passthroughProps = pick(this.props, [
      'onLaneScroll',
      'onCardClick',
      'onCardDelete',
      'onCardAdd',
      'onLaneClick',
      'addCardLink',
      'laneSortFunction',
      'draggable',
      'collapsibleLanes',
      'editable',
      'customCardLayout',
      'newCardTemplate',
      'customLaneHeader',
      'customLaneFooter',
      'children',
      'extraClasses',
    ]);

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div style={style} className={cx(BoardDiv, extraClasses.board)}>
          {lanes.map((lane, index) => {
            const { id, droppable, ...otherProps } = lane;
            return (
              <Lane
                key={id}
                id={id}
                index={index}
                droppable={droppable === undefined ? true : droppable}
                paginateLane={this.paginateLane}
                {...passthroughProps}
                {...otherProps}
              />
            );
          })}
        </div>
      </DragDropContext>
    );
  }
}

Board.propTypes = {
  data: PropTypes.object.isRequired,
  eventBusHandle: PropTypes.func,
  onLaneScroll: PropTypes.func,
  onCardClick: PropTypes.func,
  onCardDelete: PropTypes.func,
  onCardAdd: PropTypes.func,
  addCardLink: PropTypes.node,
  onLaneClick: PropTypes.func,
  laneSortFunction: PropTypes.func,
  draggable: PropTypes.bool,
  collapsibleLanes: PropTypes.bool,
  editable: PropTypes.bool,
  handleDragStart: PropTypes.func,
  handleDragEnd: PropTypes.func,
  customCardLayout: PropTypes.bool,
  newCardTemplate: PropTypes.node,
  customLaneHeader: PropTypes.element,
  customLaneFooter: PropTypes.element,
  style: PropTypes.object,
  extraClasses: PropTypes.object,
};

Board.defaultProps = {
  handleDragStart: () => {},
  handleDragEnd: () => {},
  editable: false,
  draggable: false,
  collapsibleLanes: false,
  extraClasses: {},
};
