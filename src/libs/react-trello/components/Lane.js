import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { Droppable } from 'react-beautiful-dnd';
import { cx } from 'react-emotion';

import Loader from './Loader';
import Card from './Card';
import {
  LaneHeader,
  RightContent,
  ScrollableLane,
  Section,
  Title,
} from '../styles/Base';

export default class Lane extends Component {
  state = {
    loading: false,
  };

  handleScroll = (evt) => {
    const { onLaneScroll, currentPage, totalPages } = this.props;

    const node = evt.target;
    const elemScrollPosition =
      node.scrollHeight - node.scrollTop - node.clientHeight;

    if (
      elemScrollPosition <= 0 &&
      onLaneScroll &&
      !this.state.loading &&
      currentPage < totalPages
    ) {
      this.setState({ loading: true });
      const nextPage = currentPage + 1;
      onLaneScroll(nextPage, this.props.id).then(
        (response) => {
          if (!response.clients || !response.clients.length) {
            // if no cards present, stop retrying until user action
            node.scrollTop = node.scrollTop - 100;
          }
          this.setState({ loading: false });
        },
        () => {
          this.setState({ loading: false });
          node.scrollTop = node.scrollTop - 100;
        }
      );
    }
  };

  sortCards(cards, sortFunction) {
    if (!cards) return [];
    if (!sortFunction) return cards;
    return cards.concat().sort(function(card1, card2) {
      return sortFunction(card1, card2);
    });
  }

  laneDidMount = (node) => {
    if (node) {
      node.addEventListener('scroll', this.handleScroll);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.customLaneHeader !== nextProps.customLaneHeader ||
      this.props.customLaneFooter !== nextProps.customLaneFooter ||
      this.props.totalPages !== nextProps.totalPages ||
      this.props.currentPage !== nextProps.currentPage ||
      !isEqual(this.props.cards, nextProps.cards) ||
      nextState !== this.state
    );
  }

  handleCardClick = (e, card) => {
    const { onCardClick } = this.props;
    onCardClick && onCardClick(card.id, card.metadata, card.laneId);
    e.stopPropagation();
  };

  renderDragContainer = (isDraggingOver) => {
    const {
      laneSortFunction,
      editable,
      cardStyle,
      draggable,
      cards,
      extraClasses,
    } = this.props;

    const cardList = this.sortCards(cards, laneSortFunction).map(
      (card, idx) => (
        <Card
          key={card.id}
          index={idx}
          customCardLayout={this.props.customCardLayout}
          customCard={this.props.children}
          cardStyle={cardStyle}
          onClick={(e) => this.handleCardClick(e, card)}
          onDelete={this.props.onCardDelete}
          draggable={draggable}
          editable={editable}
          extraClasses={extraClasses}
          {...card}
        />
      )
    );

    return (
      <ScrollableLane
        innerRef={this.laneDidMount}
        isDraggingOver={isDraggingOver}
        className={extraClasses.laneDraggableZone}
      >
        <span>{cardList}</span>
      </ScrollableLane>
    );
  };

  renderHeader = () => {
    const { customLaneHeader } = this.props;
    if (customLaneHeader) {
      const customLaneElement = React.cloneElement(customLaneHeader, {
        ...this.props,
      });
      return <span>{customLaneElement}</span>;
    } else {
      const { title, label, titleStyle, labelStyle } = this.props;
      return (
        <LaneHeader>
          <Title style={titleStyle}>{title}</Title>
          {label && (
            <RightContent>
              <span style={labelStyle}>{label}</span>
            </RightContent>
          )}
        </LaneHeader>
      );
    }
  };

  renderFooter = () => {
    const { customLaneFooter } = this.props;
    if (customLaneFooter) {
      const customLaneElement = React.cloneElement(customLaneFooter, {
        ...this.props,
      });
      return <span>{customLaneElement}</span>;
    }
  };

  render() {
    const { loading } = this.state;
    const {
      id,
      onLaneClick,
      index,
      droppable,
      extraClasses,
      loading: loadingProps,
    } = this.props;
    const isDropDisabled = !droppable;
    return (
      <Droppable
        droppableId={id}
        type="card"
        index={index}
        isDropDisabled={isDropDisabled}
        ignoreContainerClipping={false}
      >
        {(dropProvided, dropSnapshot) => {
          const isDraggingOver = dropSnapshot.isDraggingOver;
          return (
            <div
              key={`lane-${id}`}
              onClick={() => onLaneClick && onLaneClick(id)}
              ref={dropProvided.innerRef}
              className={cx(Section, extraClasses.lane)}
              {...dropProvided.draggableProps}
            >
              {this.renderHeader()}
              {this.renderDragContainer(isDraggingOver)}
              {(loading || !!loadingProps) && <Loader />}
              {this.renderFooter()}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

Lane.propTypes = {
  paginateLane: PropTypes.func,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  title: PropTypes.node,
  index: PropTypes.number,
  laneSortFunction: PropTypes.func,
  style: PropTypes.object,
  cardStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  customLaneHeader: PropTypes.element,
  customLaneFooter: PropTypes.element,
  customCardLayout: PropTypes.bool,
  cards: PropTypes.array,
  label: PropTypes.string,
  currentPage: PropTypes.number,
  draggable: PropTypes.bool,
  droppable: PropTypes.bool,
  onLaneScroll: PropTypes.func,
  onCardClick: PropTypes.func,
  onCardDelete: PropTypes.func,
  onCardAdd: PropTypes.func,
  onLaneClick: PropTypes.func,
  newCardTemplate: PropTypes.node,
  addCardLink: PropTypes.node,
  editable: PropTypes.bool,
  extraClasses: PropTypes.object.isRequired,
};

Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onCardAdd: () => {},
};
