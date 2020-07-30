import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/logo.svg';
import bulb from 'assets/bulb.svg';
import logout from 'assets/logout.svg';
import pen from 'assets/pen.svg';
import twitter from 'assets/twitter.svg';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 153px;
  min-height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 76px;
  height: 76px;
  background: url(${logoIcon}) no-repeat;
  background-size: 80%;
  border: none;
  z-index: 2;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const ButtonWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ pageType }) => (
  <SidebarWrapper activeColor={pageType}>
    <StyledLogoLink to="/" />
    <ButtonWrapper>
      <li>
        <ButtonIcon exact as={NavLink} to="/notes" icon={bulb} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={pen} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitter} activeclass="active" />
      </li>
    </ButtonWrapper>
    <StyledLogoutButton as={NavLink} to="/login" icon={logout} activeclass="active" />
  </SidebarWrapper>
);

export default Sidebar;
