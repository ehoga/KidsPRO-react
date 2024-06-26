import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/img/logo.png';
import menuIcon from '../../assets/img/menu.svg';
import menuClose from '../../assets/img/close.svg';
import {ReactComponent as ProfileIcon} from '../../assets/img/profile-icon.svg';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuShow = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const loginShow = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <header className="header-bar">
            <div className='header'>
                <nav className="nav-bar">
                    <img id="logo" src={logo} alt='Logo' />
                    
                    <div className='nav-icons'>
                        <div className="nav-list">
                            <ul>
                                <li className="list-header"><a className="action" href="#sobre">Sobre</a></li>
                                <li className="list-header"><a className="action" href="#treinadores">Treinadores</a></li>
                                <li className="list-header"><a className="action" href="#jogos">Jogos</a></li>
                                <li className="list-header"><a className="action" href="#contatos">Contatos</a></li>
                            </ul>
                        </div>

                        <div className='profile-icon'>
                            <button onClick={loginShow}><ProfileIcon className='profile-icon-img' /></button>
                        </div>
                    </div>

                    <div className="menu-icon">
                        <button onClick={menuShow}>
                            <img className="menu-ico-imag" src={isMenuOpen ? menuClose : menuIcon} alt="Menu" />
                        </button>
                    </div>
                </nav>
                
                <div className={`menu ${isMenuOpen ? 'open-menu' : ''}`}>
                    <ul>
                        <li className="list-header"><a className="action -second" href="#sobre">Sobre</a></li>
                        <li className="list-header"><a className="action -second" href="#treinadores">Treinadores</a></li>
                        <li className="list-header"><a className="action -second" href="#jogos">Jogos</a></li>
                        <li className="list-header"><a className="action -second" href="#contatos">Contatos</a></li>
                    </ul>
                </div>
            </div>
            <div className={`login ${isLoginOpen ? 'open-login' : ''}`}>
                <div className='side-bar'>
                    <Link to="/cadastro" className='action -sidebar'>Criar conta</Link>
                    <Link to="/login" className='action -sidebar'>Login</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
