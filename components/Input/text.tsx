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

const AuxText = styled.p`
  padding: 8px;
  padding-bottom: 4px;
  font-size: 12px;
  boder-radius: 24px;
`;

const ErrorMessage = styled.span`
  color: ${css.colorRed};
  font-size: 12px;
  padding: 8px;
`;

const Input = styled.input`
  padding: 16px;
  border-radius: ${css.borderRadius};
  border: 1px solid #0002;
  background: none;
  outline: none;
`;

const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 8px;
  background: white;
  padding: 8px;
  padding-bottom: 4px;
  font-size: 12px;
  boder-radius: 24px;
`;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  right: 8px;
  top: 4px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: 0.3s all ease-in-out;
  }

  &:hover {
    svg {
      color: ${css.colorBlue};
      fill: ${css.colorBlue};
    }
  }
`;

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

  const [currentType, setCurrentType] = useState(type);

  const handleTypeChange = () =>
    setCurrentType(currentType === 'password' ? 'text' : 'password');

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
        type={currentType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type === 'password' && value !== '' && (
        <ShowPasswordButton type="button" onClick={handleTypeChange}>
          {currentType === 'password' ? (
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              {...props}
            >
              <path fill="none" d="M-960-256H320v800H-960z" />
              <path d="M13.673 10.345l-3.097 3.096 39.853 39.854 3.097-3.097-39.853-39.853z" />
              <path
                d="M17.119 19.984l2.915 2.915c-3.191 2.717-5.732 6.099-7.374 9.058l-.005.01c4.573 7.646 11.829 14.872 20.987 13.776 2.472-.296 4.778-1.141 6.885-2.35l2.951 2.95c-4.107 2.636-8.815 4.032-13.916 3.342-9.198-1.244-16.719-8.788-21.46-17.648 2.226-4.479 5.271-8.764 9.017-12.053zm6.63-4.32c2.572-1.146 5.355-1.82 8.327-1.868.165-.001 2.124.092 3.012.238a18.45 18.45 0 011.659.35C45.472 16.657 51.936 24.033 56 31.632c-1.705 3.443-3.938 6.803-6.601 9.682l-2.827-2.827c1.967-2.12 3.607-4.48 4.87-6.769 0 0-1.27-2.042-2.233-3.324a37.988 37.988 0 00-1.954-2.395c-.54-.608-2.637-2.673-3.136-3.103-3.348-2.879-7.279-5.138-11.994-5.1-1.826.029-3.582.389-5.249.995l-3.127-3.127z"
                fillRule="nonzero"
              />
              <path d="M25.054 27.92l2.399 2.398a4.843 4.843 0 006.114 6.114l2.399 2.399A8.02 8.02 0 0125.054 27.92zm6.849-4.101l.148-.002a8.021 8.021 0 018.017 8.017l-.001.148-8.164-8.163z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              {...props}
            >
              <path fill="none" d="M-896-256H384v800H-896z" />
              <path d="M32.513 13.926c10.574.15 19.249 9.657 23.594 17.837 0 0-1.529 3.129-2.963 5.132a46.344 46.344 0 01-2.191 2.826 41.265 41.265 0 01-1.698 1.898c-5.237 5.5-12.758 9.603-20.7 8.01-8.823-1.77-16.02-9.33-20.346-17.461 0 0 1.536-3.132 2.978-5.132a45.105 45.105 0 012.034-2.617 41.618 41.618 0 011.691-1.897c4.627-4.876 10.564-8.63 17.601-8.596zm-.037 4c-5.89-.022-10.788 3.267-14.663 7.35a37.553 37.553 0 00-1.527 1.713 41.472 41.472 0 00-1.854 2.386c-.589.816-1.193 1.846-1.672 2.721 3.814 6.409 9.539 12.198 16.582 13.611 6.563 1.317 12.688-2.301 17.016-6.846a37.224 37.224 0 001.534-1.715c.7-.833 1.366-1.694 1.999-2.579.586-.819 1.189-1.851 1.667-2.727-3.958-6.625-10.73-13.784-19.082-13.914z" />
              <path d="M32.158 23.948c4.425 0 8.018 3.593 8.018 8.017a8.021 8.021 0 01-8.018 8.017 8.021 8.021 0 01-8.017-8.017 8.022 8.022 0 018.017-8.017zm0 4.009a4.01 4.01 0 014.009 4.008 4.01 4.01 0 01-4.009 4.009 4.01 4.01 0 01-4.008-4.009 4.01 4.01 0 014.008-4.008z" />
            </svg>
          )}
        </ShowPasswordButton>
      )}
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
