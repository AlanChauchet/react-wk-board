import styled, { injectGlobal, css } from 'react-emotion';

injectGlobal`
  .comPlainTextContentEditable {
    -webkit-user-modify: read-write-plaintext-only;
  }

  .comPlainTextContentEditable--has-placeholder::before {
    content: attr(placeholder);
    opacity: 0.5;
    color: inherit;
    cursor: text;
  }
`;

export const BoardDiv = css`
  background-color: transparent;
  padding: 5px;
  font: 14px/18px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: #393939;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Header = styled('header')`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Section = css`
  background-color: #f8f9fd;
  border-radius: 3px;
  margin: 5px 5px;
  margin-right: 16px;
  position: relative;
  padding: 10px;
  display: inline-flex;
  height: auto;
  max-height: 90%;
  flex-direction: column;
`;

export const LaneHeader = styled(Header)`
  z-index: 1000;
  padding: 0px 5px;
  margin-bottom: 0px;
`;

export const ScrollableLane = styled('div')`
  flex: 1;
  overflow-y: auto;
  min-width: 250px;
  overflow-x: hidden;
  align-self: center;
  height: 100%;
  padding-bottom: ${(props) => (props.isDraggingOver ? '130px' : '30px')};
  margin-top: 10px;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Title = styled('span')`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  cursor: grab;
  width: 70%;
`;

export const RightContent = styled('span')`
  width: 30%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`;
export const CardWrapper = css`
  border-radius: 5px;
  border: none;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`;

export const CardHeader = styled(Header)`
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
`;

export const CardTitle = styled(Title)`
  font-size: 14px;
`;

export const CardRightContent = styled(RightContent)`
  font-size: 10px;
`;

export const Detail = styled('div')`
  font-size: 12px;
  color: #4d4d4d;
`;

export const Footer = styled('div')`
  border-top: 1px solid #eee;
  padding-top: 6px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
`;
