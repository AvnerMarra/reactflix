import React from 'react';
import Logo from '../../assets/img/tutoriaisflix-logo.png';
import { LogoImage, MenuWrapper, ButtonLink, IconVideo} from './style.js';
import styled from 'styled-components'
import {VideoPlus} from '@styled-icons/boxicons-solid/VideoPlus'


//import ButtonLink from './components/ButtonLink';
//import Button from '../Buttton';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Tutoriaisflix logo" />
            </a>

            <ButtonLink as="a" href="/" className="ButtonLink"><IconVideo />
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;