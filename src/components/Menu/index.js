import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/tutoriaisflix-logo.png';
import { LogoImage, MenuWrapper, ButtonLink, IconVideo } from './style.js';
import styled from 'styled-components'
//import {VideoPlus} from '@styled-icons/boxicons-solid/VideoPlus'


//import ButtonLink from './components/ButtonLink';
//import Button from '../Buttton';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Tutoriaisflix logo" />
            </Link>

            <ButtonLink as={Link} to="/cadastro/video" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Novo Vídeo
            </ButtonLink>
            <ButtonLink as={Link} to="//cadastro/categoria" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Novo Categoria
            </ButtonLink>
            <ButtonLink as={Link} to="/" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Admissão
            </ButtonLink>
            <ButtonLink as={Link} to="/" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Evolução
            </ButtonLink>
            <ButtonLink as={Link} to="/" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Prescrição
            </ButtonLink>
            <ButtonLink as={Link} to="/" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Estoque
            </ButtonLink>
            <ButtonLink as={Link} to="/" className="ButtonLink" placeholder="Novo Vídeo">
                <IconVideo />Pesquisar
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;