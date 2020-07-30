/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
    const label = 'Colors';
    const options = {
      Primary: '#D9E096',
      Secondary: 'hsl(126,80%, 18%)',
      Tertiary: 'hsl(106,40%, 68%)',
    };
    const defaultValue = 'hsl(49,100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello Damian</Button>;
  })
  .add('secondary', () => <Button secondary>Hello Damian</Button>);
