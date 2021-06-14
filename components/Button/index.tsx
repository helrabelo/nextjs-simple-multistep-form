import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { css } from 'lib/constants';

type ButtonProps = {
  onClick: any;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const StyledButton = styled.button`
  margin: 24px auto;
  padding: 16px 24px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  color: ${css.colorWhite};
  background: ${css.colorBlue};
  cursor: pointer;
  width: 100%;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: ${css.colorCyan};
  }

  &:disabled {
    background: ${css.colorGray};
    cursor: not-allowed;
  }
`;

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const {
    onClick,
    children,
    className,
    disabled,
    type,
    ...remainingProps
  } = props;

  return (
    <StyledButton
      ref={ref}
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
      {...remainingProps}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
