import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddModal from 'components/organisms/AddModal';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import SidebarTemplate from 'templates/SidebarTemplate';

const StyledGridTemplate = styled.div`
  padding: 25px 80px 25px 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledParagraph = styled(Heading)`
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
`;
const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledAddButton = styled(ButtonIcon)`
  position: absolute;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border: 5px;
  font-size: 40px;
  text-align: center;
  z-index: 4;
`;

class GridTemplate extends Component {
  state = {
    isActive: false,
  };

  handleOpenAddModal = () => this.setState((prevState) => ({ isActive: !prevState.isActive }));

  render() {
    const { children, pageType } = this.props;
    const { isActive } = this.state;

    return (
      <SidebarTemplate pageType={pageType}>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big>{pageType}</StyledHeading>
          <StyledParagraph>4 {pageType}</StyledParagraph>
        </StyledPageHeader>
        <StyledGridTemplate>{children}</StyledGridTemplate>
        <StyledAddButton onClick={this.handleOpenAddModal} activeColor={pageType}>
          +
        </StyledAddButton>
        <AddModal isVisible={isActive} pageType={pageType} />
      </SidebarTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
