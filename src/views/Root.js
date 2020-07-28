import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Article from 'views/Article';
import Twitter from 'views/Twitter';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/article" component={Article} />
        <Route path="/twitter" component={Twitter} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
