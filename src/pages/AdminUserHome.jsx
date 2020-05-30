import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import '../styles/pages/AdminUserHome.styl';
import Button from '../components/Button';

const AdminUserHome = ({ users, history }) => {
  const [filterBy, setFilter] = useState('Todos');

  const filteredUsers = useFilter => {
    if (
      useFilter === 'Medicos' ||
      useFilter === 'Pacientes' ||
      useFilter === 'Administrador'
    ) {
      return users.filter(user => user.rol === useFilter);
    }
    if (useFilter === 'Todos') {
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
    <div className="userHome__container">
      <SideMenu useFilter={filterSelected} />
      <div className="userHome__table">
        <div className="userHome__tableActions">
          <div className="userHome__tableActions__filter">
            <h2> Titulo Tabla</h2>
            <input type="text" placeholder="Filter" onChange={handleChange} />
          </div>
          <div>
            <Link to="/register">
              <Button text="Nuevo Usuario" />
            </Link>
            <Button text="Cargar CSV " />
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
