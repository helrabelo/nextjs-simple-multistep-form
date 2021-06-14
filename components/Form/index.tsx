import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { css } from 'lib/constants';

import { TextInput, SelectInput } from 'components/Input';

import Button from 'components/Button';

import { validateEmail, validateName, validatePassword } from 'lib/utils';

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

const FormCopyLink = styled.a`
  width: 100%;
  text-decoration: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: ${css.colorCyan};
    text-decoration: underline;
  }
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

  const { name, email, password, repeatUser, user, userType } = formData;

  const [formStep, setFormStep] = useState(0);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleStepChange = (newStep) => () => setFormStep(newStep);

  const validateForm = (form) => {
    return (
      validateName(form.name) &&
      form.name !== '' &&
      validateEmail(form.email) &&
      form.email !== '' &&
      validatePassword(form.password) &&
      form.password !== '' &&
      form.user === form.repeatUser &&
      form.user !== 'asd'
    );
  };

  useEffect(() => {
    console.log(validateForm(formData));
    return setIsFormValid(validateForm(formData));
  }, [formData]);

  return (
    <FormWrapper ref={ref} className={className} {...remainingProps}>
      <FormHeader>Let's set up your account</FormHeader>
      <FormCopy>
        Already have a account? <FormCopyLink href="#">Sign in</FormCopyLink>
      </FormCopy>
      {formStep === 0 && (
        <>
          <TextInput
            value={name}
            label="Name"
            placeholder="Please enter your full name"
            errorMessage="Please enter a valid name"
            validate={validateName}
            onChange={handleFormChange('name')}
          />
          <TextInput
            value={email}
            label="Email"
            placeholder="Please enter your email"
            errorMessage="Please enter a valid email"
            validate={validateEmail}
            onChange={handleFormChange('email')}
          />
          <SelectInput
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'dev', label: 'Developer' },
              { value: 'designer', label: 'Designer' },
            ]}
            value={userType.value}
            label="Type"
            onChange={handleFormChange('userType')}
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
            By clicking the "Next" button, you agree to creating a free account,
            and to <a href="#">Terms of Service</a> and{' '}
            <a href="#">Privacy Policy</a>
          </FormFooterCopy>
          {children}
          <Button disabled={!isFormValid} onClick={handleStepChange(1)}>
            Next
          </Button>
        </>
      )}
      {formStep === 1 && (
        <>
          <TextInput
            value={user}
            label="Username"
            placeholder="Please enter your username"
            errorMessage="Please enter a valid username"
            validate={validateName}
            onChange={handleFormChange('user')}
          />
          <TextInput
            value={repeatUser}
            label="Repeat Username"
            placeholder="Please repeat your username"
            errorMessage="The usernames don't match"
            validate={(repeated) => repeated === user}
            onChange={handleFormChange('repeatUser')}
          />
          {children}
          <Button onClick={handleStepChange(0)}>Go back</Button>
        </>
      )}
    </FormWrapper>
  );
});

Form.defaultProps = {
  className: '',
  children: null,
};

export default Form;
