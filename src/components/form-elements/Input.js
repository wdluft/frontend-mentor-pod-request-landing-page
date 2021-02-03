import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: ${(props) => (props.error.length > 0 ? '2rem' : '1rem')};
  position: relative;

  @media screen and (min-width: 40rem) {
    margin-bottom: 1rem;
  }

  input {
    background-color: var(--darkGrey);
    color: var(--white);
    font-size: 0.875rem;
    line-height: 1.75rem;
    border: none;
    border-radius: 28px;
    padding: 0.5625rem 2rem;
    width: 100%;

    ::placeholder {
      color: var(--lightGrey);
      opacity: 1;
    }

    @media screen and (min-width: 40rem) {
      padding: 0.875rem 2rem;
      margin-bottom: 0;
    }
  }

  .error {
    color: var(--red);
    font-size: 0.75rem;
    font-weight: bold;
    padding-left: 2rem;
    position: absolute;
  }
`;

const Input = ({ type, placeholder, value, handleChange, error }) => (
  <InputWrapper error={error}>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
    {error.length ? <p className="error">{error}</p> : null}
  </InputWrapper>
);

export default Input;
