import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { TextInput } from 'components/Input';

import Button from 'components/Button';

import { validateEmail, validatePassword } from 'lib/utils';

import Link from 'next/link';

type FormProps = {
  formData: any;
  handleFormChange: any;
  children?: React.ReactNode;
  className?: string;
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 450px;
  padding: 24px 32px;

  @media (max-width: 768px) {
    max-width: 300px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const FormHeader = styled.h1`
  width: 100%;
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
`;

const FormCopy = styled.p`
  width: 100%;
  margin-bottom: 48px;
`;

const FormFooterCopy = styled.p``;

const Form = forwardRef((props: FormProps, ref: any) => {
  const {
    formData,
    children,
    className,
    handleFormChange,
    ...remainingProps
  } = props;

  const { email, password } = formData;

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (form) => {
    return (
      validateEmail(form.email) &&
      form.email !== '' &&
      validatePassword(form.password) &&
      form.password !== ''
    );
  };

  useEffect(() => {
    return setIsFormValid(validateForm(formData));
  }, [formData]);

  return (
    <FormWrapper ref={ref} className={className} {...remainingProps}>
      <FormHeader>Login to our app</FormHeader>
      <FormCopy>
        Don't have an account yet? <Link href="/">Sign up</Link>
      </FormCopy>

      <TextInput
        value={email}
        label="Email"
        placeholder="Please enter your email"
        errorMessage="Please enter a valid email"
        validate={validateEmail}
        onChange={handleFormChange('email')}
      />

      <TextInput
        value={password}
        label="Password"
        placeholder="Please enter your password"
        auxText="Minimum 8 characters, 1 upper case letter and 1 special character"
        errorMessage="Please enter a valid password"
        type="password"
        validate={validatePassword}
        onChange={handleFormChange('password')}
      />
      <FormFooterCopy>
        If you want to know more about handle your data, here's a link to our{' '}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
      </FormFooterCopy>
      {children}
      <Button
        disabled={!isFormValid}
        // eslint-disable-next-line no-alert
        onClick={() => window.alert('Tried to login')}
      >
        Login
      </Button>
    </FormWrapper>
  );
});

Form.defaultProps = {
  className: '',
  children: null,
};

export default Form;
