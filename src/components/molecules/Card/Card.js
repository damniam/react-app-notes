import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';

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
  border: 5px solid ${({ theme }) => theme.twitter};
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

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Damian</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvater src="https://api.adorable.io/avatars/140/damiandzialo@adorable.io.png" />
      )}
      {cardType === 'article' && <StyledLinkButton href="#" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Esse aliquip nisi dolore sunt consequat minim voluptate esse enim nulla ex. Ea voluptate non
        amet deserunt nisi cupidatat reprehenderit exercitation. Adipisicing ut elit cupidatat ea
        dolor magna consequat consectetur id est minim. Occaecat commodo incididunt adipisicing esse
        consectetur. Ullamco ut velit veniam eiusmod. Aute non nulla velit aute magna.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
