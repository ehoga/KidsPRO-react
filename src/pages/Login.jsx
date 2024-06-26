import React, { useState } from 'react';
import '../styles/login.css';
import '../components/buttons.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername('');
        setPassword('');

        navigate("/");
    };

    return (
        <div className='login-page'>
            <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="username">E-mail</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button className="button -auth" type="submit">Login</button>
            
            </form>
            
            </div>
            
            <div className='links'>
                <Link to='/' className='voltar'>Voltar</Link>
                <Link to='/cadastro' className='auth'>Registrar-se</Link>
            </div>
        </div>

    );
};

export default Login;
