import styled from 'styled-components';

import { css } from 'lib/constants';

export const PageContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: unset;
    grid-template-columns: auto;
    overflow: hidden;
    max-width: 100vw;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${css.colorBlue};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 24px 36px;
`;

export const Header = styled.h1`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 48px;
  text-align: center;
  width: 100%;
  color: ${css.colorWhite};
`;

export const Copy = styled.p`
  line-height: 32px;
  font-weight: 200;
  color: ${css.colorWhite};
`;
