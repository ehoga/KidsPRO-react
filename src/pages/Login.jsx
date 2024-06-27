import React, { useEffect, useState } from 'react';
import authData from '../auth.json'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import '../components/buttons.css'
import Header from '../components/Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const auth = authData.users.find(u => u.email === email && u.password === password);
            console.log(auth);
            if (auth) {
                alert('Login realizado com sucesso!');
                navigate("/");
            } else {
                setLoginError('Email ou senha estão invalidos');
            }
        } catch (error) {
            console.error(error);
            setLoginError('Erro ao realizar o login');
        }

    };

    useEffect(() => {
        if(loginError){
            const timer = setTimeout(() => {
                setLoginError('');
            }, 5000);
            return () => clearTimeout(timer);
        }


    }, [loginError]);

    return (
        <div className='login-page'>

            <Header />
            
            <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
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
                
                {loginError && <p className='auth-error'>{loginError}</p>}

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
