import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { css } from 'lib/constants';

type TextInputProps = {
  auxText?: string;
  children?: React.ReactNode;
  className?: string;
  errorMessage?: string;
  label?: string;
  password?: boolean;
  placeholder?: string;
  onChange: any;
  value: string;
  validate?: any;
  type?: 'text' | 'password';
};

const AuxText = styled.p``;

const ErrorMessage = styled.span``;

const Input = styled.input``;

const Label = styled.label``;

const TextInputWrapper = styled.div``;

const TextInput = forwardRef((props: TextInputProps, ref: any) => {
  const {
    auxText,
    children,
    className,
    errorMessage,
    label,
    onChange,
    placeholder,
    value,
    validate,
    type,
    ...remainingProps
  } = props;

  const [isValid, setIsValid] = useState(validate(value));

  useEffect(() => {
    if (value) return setIsValid(validate(value));
    return setIsValid(value === '');
  }, [value]);

  return (
    <TextInputWrapper {...remainingProps}>
      {label && <Label>{label}</Label>}
      <Input
        ref={ref}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type === 'password' && <p>PASSWORD</p>}
      {!isValid && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {auxText && <AuxText>{auxText}</AuxText>}
      {children}
    </TextInputWrapper>
  );
});

TextInput.defaultProps = {
  auxText: null,
  children: null,
  className: '',
  errorMessage: null,
  label: null,
  placeholder: null,
  validate: null,
  type: 'text',
};

export default TextInput;
