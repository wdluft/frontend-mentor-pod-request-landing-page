import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: var(--green);
  color: var(--black);
  font-size: 0.875rem;
  line-height: 1.75rem;
  border: none;
  border-radius: 28px;
  font-weight: bold;
  padding: 0.5625rem 2rem;
  width: 100%;
  transition: var(--transition);
  cursor: pointer;

  :hover {
    background: var(--lightGreen);
  }

  @media screen and (min-width: 40rem) {
    position: absolute;
    right: 5px;
    top: 5px;
    width: fit-content;
    padding: 0.5625rem 1.75rem;
  }
`;

const Button = ({ value, type }) => (
  <ButtonWrapper type={type}>{value}</ButtonWrapper>
);

export default Button;
