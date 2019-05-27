import React from 'react';
import { connect } from 'react-redux';
import UsuarioList from '../../components/Usuario/List';

const UsuarioListPage = () => (
  <div>
    <UsuarioList />
  </div>
);

export default connect()(UsuarioListPage);
