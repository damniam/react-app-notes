import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitter = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, created, id }) => (
      <Card
        cardType="twitters"
        id={id}
        title={title}
        description={content}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProp = ({ twitters }) => ({ twitters });

export default connect(mapStateToProp)(Twitter);
