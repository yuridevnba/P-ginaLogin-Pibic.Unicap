import React from 'react';
import logo from '../assets/logopomba.png'; 


const Login = () => {
  return (
    <div className="login-container">
        <img src={logo} alt="UNICAP Logo" className="logo" />
      <div className="card">
        <text className='texto'>PORTAL DO ALUNO</text>
        <input type="text" placeholder="Login" className="input" />
        <input type="password" placeholder="Senha" className="input" />
        <button className="button">Acessar</button>
      </div>
    </div>
  );
};

export default Login;
