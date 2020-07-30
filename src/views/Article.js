import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Article = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        description={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Article);
