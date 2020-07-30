import React from 'react';
import Logo from '../../assets/img/tutoriaisflix-logo2.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from './Buttton';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Tutoriaisflix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;