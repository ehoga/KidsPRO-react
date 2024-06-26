import React, { useState } from 'react';
import '../styles/registro.css';
import '../components/buttons.css'
import { Link, useNavigate } from 'react-router-dom';

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Email:', email);
        setUsername('');
        setPassword('');
        setEmail('');

        navigate("/login");
    };

    return (
        
        <div className='register-page'>
            <div className="register-container">
                <h1>Registrar-se</h1>
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button className="button -auth" type="submit">Registrar-se</button>
                </form>
            </div>

            <div className='links'>
                <Link to='/' className='voltar'>Voltar</Link>
                <Link to='/login' className='auth'>Login</Link>
            </div>
        </div>
    );
};

export default Cadastro;
