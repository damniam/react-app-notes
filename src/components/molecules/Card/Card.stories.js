import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { storiesOf } from '@storybook/react';

storiesOf('Card', module)
  .add('example', () => <Card />)
  .add('twitter', () => <Card cardType="twitter" />)
  .add('article', () => <Card cardType="article" />);
