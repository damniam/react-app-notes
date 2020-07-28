import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('simple', () => <Input placeholder="login" />)
  .add('search', () => <Input search placeholder="search" />);
