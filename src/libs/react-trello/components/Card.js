import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { cx } from 'react-emotion';

import {
  CardHeader,
  CardRightContent,
  CardTitle,
  CardWrapper,
  Detail,
} from '../styles/Base';

class Card extends Component {
  renderBody = () => {
    if (this.props.customCardLayout) {
      const { customCard, ...otherProps } = this.props;
      return React.cloneElement(customCard, { ...otherProps });
    } else {
      const { title, description, label } = this.props;
      return (
        <span>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardRightContent>{label}</CardRightContent>
          </CardHeader>
          <Detail>{description}</Detail>
        </span>
      );
    }
  };

  getItemStyle = (isDragging, draggableStyle) => ({
    backgroundColor: isDragging ? '#f0f0f0' : '#fff',
    ...draggableStyle,
    margin: '0px 0px 15px 0px',
    transform:
      draggableStyle.transform &&
      `${draggableStyle.transform}${isDragging ? ` rotate(3deg)` : ''}`,
  });

  render() {
    const {
      id,
      index,
      cardStyle,
      draggable,
      customCardLayout,
      extraClasses,
      onClick,
    } = this.props;
    const style = customCardLayout ? { ...cardStyle, padding: 0 } : cardStyle;
    const isDragDisabled = !draggable;
    return (
      <Draggable
        key={id}
        draggableId={id}
        type="card"
        index={index}
        isDragDisabled={isDragDisabled}
        disableInteractiveElementBlocking={true}
      >
        {(dragProvided, dragSnapshot) => {
          const draggablePropsStyle =
            dragProvided.draggableProps && dragProvided.draggableProps.style;
          const dragStyle = this.getItemStyle(
            dragSnapshot.isDragging,
            draggablePropsStyle
          );

          return (
            <span>
              <div
                key={id}
                data-id={id}
                ref={dragProvided.innerRef}
                onClick={onClick}
                {...dragProvided.draggableProps}
                {...dragProvided.dragHandleProps}
                style={{
                  ...dragStyle,
                  ...style,
                }}
                className={cx(
                  CardWrapper,
                  extraClasses.card,
                  !!dragSnapshot.isDragging && extraClasses.cardDragging
                )}
              >
                {this.renderBody()}
              </div>
              {dragProvided.placeholder}
            </span>
          );
        }}
      </Draggable>
    );
  }
}

Card.defaultProps = {
  cardStyle: {},
  customCardLayout: false,
  onDelete: () => {},
  editable: false,
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  index: PropTypes.number,
  description: PropTypes.string,
  label: PropTypes.string,
  laneId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  metadata: PropTypes.object,
  cardStyle: PropTypes.object,
  customCardLayout: PropTypes.bool,
  customCard: PropTypes.node,
  extraClasses: PropTypes.object.isRequired,
};

export default Card;
