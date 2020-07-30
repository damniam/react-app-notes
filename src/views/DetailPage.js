import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from 'templates/DetailTemplate';
import { routes } from 'routes';

class DetailPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitterId:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.noteId:
        this.setState({ pageType: 'notes' });
        break;
      case routes.articleId:
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const exampleNote = {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: '#',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailTemplate
        pageType={pageType}
        title={exampleNote.title}
        description={exampleNote.content}
        created={exampleNote.created}
        url={exampleNote.url}
      />
    );
  }
}

DetailPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailPage;
