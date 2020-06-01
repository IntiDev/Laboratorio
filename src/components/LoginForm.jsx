/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import Button from './Button';
import '../styles/components/LoginForm.styl';

const LoginForm = props => {
  const { title } = props;

  const initialState = {
    email: '',
    password: '',
  };

  const [{ email, password }, setState] = useState(initialState);

  // const API_URL = 'API_URL_HERE';

  const userData = [
    {
      id: 1,
      email: 'admin@invitro.com',
      name: 'David',
      lastName: 'González',
      mobile: '12-34-56-78',
      phone: '90-67-45-23',
      userType: 'admin',
    },
    {
      id: 2,
      email: 'medico@invitro.com',
      name: 'Sofia',
      lastName: 'Ramirez',
      mobile: '56-45-34-45',
      phone: '88-44-66-33',
      userType: 'medical',
    },
  ];

  const clearState = () => {
    setState({ ...initialState });
  };

  // const sendUserInformation = async (url, method, data) => {
  //   try {
  //     const response = await fetch(url, {
  //       method,
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     return response;
  //   } catch (e) {
  //     return e;
  //   }
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    // API IMPLEMENTATION
    // sendUserInformation(`${API_URL}/login`, 'POST', { email, password })
    //   .then(() => {
    //     clearState();
    //     // console.log('Usuario válido');
    //   })
    //   .catch(() => {
    //     // console.error('Error');
    //   });

    // MOCK DATA IMPLEMENTATION

    const userInformation = userData.find(item => {
      return item.email === email;
    });

    clearState();

    const { userType } = userInformation;

    switch (userType) {
      case 'admin':
        // eslint-disable-next-line no-undef
        location.href = '/adminUser';
        break;
      case 'medical':
        // eslint-disable-next-line no-undef
        location.href = '/medical';
        break;
      case 'bacteriologist':
        break;
      case 'patient':
        break;
      default:
        // console.error("Login incorrecto");
        break;
    }
  };

  return (
    <div className="LoginForm">
      <p className="LoginForm__title">{title}</p>
      <input
        type="email"
        name="email"
        value={email}
        className="LoginForm__input"
        placeholder="usuario@correo.com"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        className="LoginForm__input"
        placeholder="********"
        onChange={handleChange}
      />
      <Button text="Login" onClick={handleClick} />
    </div>
  );
};

export default LoginForm;
