import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import '../styles/pages/AdminUserHome.styl';
import Button from '../components/Button';

const AdminUserHome = ({ users, history }) => {
  const [filterBy, setFilter] = useState('Usuarios');

  const filteredUsers = useFilter => {
    if (
      useFilter === 'Medicos' ||
      useFilter === 'Pacientes' ||
      useFilter === 'Administradores'
    ) {
      return users.filter(user => user.rol === useFilter);
    }
    if (useFilter === 'Usuarios') {
      return users;
    }
    return users.filter(user =>
      user.name.toLowerCase().includes(useFilter.toLowerCase())
    );
  };

  const filterSelected = menuFilter => {
    setFilter(menuFilter);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className="userHome">
      <SideMenu useFilter={filterSelected} />
      <div className="userHome__table">
        <div className="userHome__tableActions">
          <div className="userHome__tableActions__filter">
            <h2> {filterBy}</h2>
            <input type="text" placeholder="Filter" onChange={handleChange} />
          </div>
          <div>
            <Link to="/register">
              <Button className="button" text="Nuevo Usuario" />
            </Link>
            <Link to="/adminUser">
              <Button text="Cargar CSV " disabled />
            </Link>
          </div>
        </div>
        <Table users={filteredUsers(filterBy)} history={history} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(AdminUserHome);