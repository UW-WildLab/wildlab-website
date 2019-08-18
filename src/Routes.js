import React from 'react';
import { Switch, Route } from 'react-router';
import {
  About,
  Calendar,
  FAQ,
  Home,
  News,
  NewsItem,
  NoMatch,
  People,
  Person,
  Project,
  Projects,
  Publications
} from './views';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/calendar" component={Calendar} />
    <Route exact path="/faqs" component={FAQ} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/news" component={News} />
    <Route exact path="/news/:newsitem" component={NewsItem} />
    <Route exact path="/people" component={People} />
    <Route exact path="/people/:personId" component={Person} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/projects/:project" component={Project} />
    <Route exact path="/publications" component={Publications} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
