import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../form-elements/Button';
import Input from '../form-elements/Input';

const FormWrapper = styled.form`
  @media screen and (min-width: 40rem) {
    position: relative;
    width: 71%;
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 69rem) {
    max-width: 60%;
  }
`;

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // regular expression for email validation
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    console.log('form submitted');
    console.log(e.target[0].value);
    if (email.length === 0) {
      setErrors('Oops! Please add your email');
      return;
    }
    if (!pattern.test(email)) {
      setErrors('Oops, Please check your email');
      return;
    }

    setEmail('');
    setErrors('');
  };

  return (
    <FormWrapper className="emailform" noValidate onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        error={errors}
      />
      <Button value="Request Access" type="submit" />
    </FormWrapper>
  );
};

export default EmailForm;
