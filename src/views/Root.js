import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Article from 'views/Article';
import Twitter from 'views/Twitter';
import { routes } from 'routes';
import DetailPage from './DetailPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.notesId} component={DetailPage} />
          <Route exact path={routes.article} component={Article} />
          <Route path={routes.articleId} component={DetailPage} />
          <Route exact path={routes.twitter} component={Twitter} />
          <Route path={routes.twitterId} component={DetailPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
