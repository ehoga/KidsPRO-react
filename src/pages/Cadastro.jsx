import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/cadastro.css';
import '../components/buttons.css';
import Header from '../components/Header';

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cadastroError, setCadastroError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('http://localhost:5000/users', { username, email, password });
            alert('Usuario cadastrado com sucesso!');
            navigate("/login");
        } catch (error) {
            console.error(error);
            setCadastroError('Erro ao cadastrar o usuario')
        }
    };

    useEffect(() => {
        if(cadastroError){
            const timer = setTimeout(() => {
                setCadastroError('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [cadastroError]);

    return (
        <div className='register-page'>
            
            <Header />
        
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
                    
                    {cadastroError && <p className='auth-error'>{cadastroError}</p>}
                    
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
