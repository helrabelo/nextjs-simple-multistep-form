import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { css } from 'lib/constants';

type SelectProps = {
  auxText?: string;
  children?: React.ReactNode;
  className?: string;
  errorMessage?: string;
  label?: string;
  password?: boolean;
  placeholder?: string;
  options: any;
  onChange: any;
  value: any;
  validate?: any;
};

const AuxSelect = styled.p`
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

const Select = styled.select`
  padding: 16px;
  border-radius: ${css.borderRadius};
  border: 1px solid #0002;
  background: none;
  outline: none;
`;

const Option = styled.option``;

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

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const SelectInput = forwardRef((props: SelectProps, ref: any) => {
  const {
    auxText,
    children,
    className,
    errorMessage,
    label,
    onChange,
    options,
    placeholder,
    value,
    ...remainingProps
  } = props;

  return (
    <SelectWrapper {...remainingProps}>
      {label && <Label>{label}</Label>}
      <Select
        ref={ref}
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {auxText && <AuxSelect>{auxText}</AuxSelect>}
      {children}
    </SelectWrapper>
  );
});

Select.defaultProps = {
  auxText: null,
  children: null,
  className: '',
  errorMessage: null,
  label: null,
  placeholder: null,
  validate: null,
};

export default SelectInput;
