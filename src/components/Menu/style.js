import styled from 'styled-components';
import Button from '../Buttton'
import {VideoPlus} from '@styled-icons/boxicons-solid/VideoPlus'

export const IconVideo = styled(VideoPlus)`
    max-width: 55px;
    text-align: center;
    
`;
export const LogoImage = styled.img`
    max-width: 200px;

    @media (max-width: 800px) { 
        max-width: 125px;
    };
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 1%;
    padding-right: 5%;
  
    background: var(--mainColor);
    

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
}
`;

export const ButtonLink = styled(Button)`
    text-align: center;
    text-decoration: none;
    
    color: var(--white);    
    cursor: pointer;
    padding: 10px 15px;
    
    font-size: 10px;    
    font-style: normal;
    font-weight: normal;
    
    outline: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .6;
    }
    
    @media (max-width: 800px){
        
        text-align: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        }
        
`;