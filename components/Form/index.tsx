import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { css } from 'lib/constants';

import { TextInput } from 'components/Input';

import { validateEmail, validateName, validatePassword } from 'lib/utils';

type FormProps = {
  formData: any;
  handleFormChange: any;
  children?: React.ReactNode;
  className?: string;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: thin solid blue;
`;

const Form = forwardRef((props: FormProps, ref: any) => {
  const {
    formData,
    children,
    className,
    handleFormChange,
    ...remainingProps
  } = props;

  const {
    avatar,
    name,
    email,
    password,
    phone,
    repeatUse,
    user,
    userType,
  } = formData;

  return (
    <StyledForm ref={ref} className={className} {...remainingProps}>
      <h1>Let's set up your account</h1>
      <p>
        Already have a account? <a href="#">Sign in</a>
      </p>
      <TextInput
        value={name}
        label="Your name"
        placeholder="Please enter your full name"
        errorMessage="Please enter a valid name"
        validate={validateName}
        onChange={handleFormChange('name')}
      />
      <TextInput
        value={email}
        label="Your email"
        placeholder="Please enter your email"
        errorMessage="Please enter a valid email"
        validate={validateEmail}
        onChange={handleFormChange('email')}
      />
      <TextInput
        value={password}
        label="Password"
        placeholder="Please enter your password"
        auxText="Minimum 8 characters"
        errorMessage="Please enter a valid password"
        type="password"
        validate={validatePassword}
        onChange={handleFormChange('password')}
      />
      <p>
        By clicking the "Next" button, you agree to creating a free account, and
        to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
      </p>
      <span>{children}</span>
      <span>{avatar}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>{password}</span>
      <span>{phone}</span>
      <span>{repeatUse}</span>
      <span>{user}</span>
      <span>{userType}</span>
    </StyledForm>
  );
});

Form.defaultProps = {
  className: '',
  children: null,
};

export default Form;
