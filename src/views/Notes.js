import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, created, id }) => (
      <Card
        cardType="notes"
        id={id}
        title={title}
        description={content}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProp = ({ notes }) => ({ notes });

export default connect(mapStateToProp)(Notes);
