import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/desktop/logo.svg';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-bottom: 3.625rem;

  @media screen and (min-width: 40rem) {
    padding-bottom: 9.5rem;
  }

  @media screen and (min-width: 69rem) {
    padding-bottom: 6.5rem;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <img src={Logo} alt="pod" />
  </HeaderWrapper>
);

export default Header;
