import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Title', () => <Heading>Title</Heading>)
  .add('Big', () => <Heading big>Title</Heading>);
