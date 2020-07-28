import React from 'react';
import { storiesOf } from '@storybook/react';
import bulb from 'assets/bulb.svg';
import logout from 'assets/logout.svg';
import pen from 'assets/pen.svg';
import plus from 'assets/plus.svg';
import twitter from 'assets/twitter.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator((story) => <YellowBackground>{story()}</YellowBackground>)
  .add('bulb', () => <ButtonIcon icon={bulb} active />)
  .add('logout', () => <ButtonIcon icon={logout} />)
  .add('pen', () => <ButtonIcon icon={pen} />)
  .add('plus', () => <ButtonIcon icon={plus} />)
  .add('twitter', () => <ButtonIcon icon={twitter} />);
