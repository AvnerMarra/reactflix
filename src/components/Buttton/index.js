import styled from 'styled-components';

const Button = styled.button`

background: #00969F;
color: #FFFFFF;

cursor: pointer;
padding: 10px 15px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
text-decoration: none;
display: inline-block;
transition: opacity .3s;

&:hover,
&:focus {
opacity: .5;
}

@media (max-width: 800px) {
& {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00969F;
  border-radius: 0;
  border: 0;
  text-align: center;
}
}`;

export default Button;
