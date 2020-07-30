import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'action';

// const CARD_TYPE = {
//   note: 'NOTE',
//   twitte: 'TWITTER',
//   article: 'ARTICLE',
// };

const StyledWrapper = styled.div`
  min-height: 380px;
  border-radius: 40px;
  background-color: gray;
  box-shadow: 10px 0px 30px -13px rgba(0, 0, 0, 0.2);
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const StyledAvater = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 1;
`;

const StyledLinkButton = styled.a`
  display: block;
  position: absolute;
  width: 47px;
  height: 47px;
  border: 3px solid whitesmoke;
  border-radius: 50px;
  background: whitesmoke url(${LinkIcon}) no-repeat;
  background-position: 50%;
  right: 25px;
  transform: translateY(-100%);
  z-index: 2;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, created, description, urlAvatar, removeItem } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }
    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && <StyledAvater src={urlAvatar} />}
          {cardType === 'articles' && <StyledLinkButton href="#" />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{description}</Paragraph>
          <Button secondary onClick={() => removeItem(cardType, id)}>
            Remove
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  urlAvatar: 'https://api.adorable.io/avatars/140/damiandzialo@adorable.io.png',
  cardType: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
