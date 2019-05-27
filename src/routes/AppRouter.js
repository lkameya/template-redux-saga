import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/_UI/Layout';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import UsuarioListPage from '../pages/Usuario/List';
import PublicRoute from './PublicRouter';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Layout>
        <Switch>
          <PublicRoute path="/home" component={HomePage} exact={true} />
          <PublicRoute path="/users" component={UsuarioListPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
