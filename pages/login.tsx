import React, { useState } from 'react';

import Layout from 'components/Layout';
import { LoginForm } from 'components/Form';

import {
  css,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import styled from 'styled-components';

const PageContainer = styled.div`
  border: thin solid red;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 36px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${css.colorBlue};
  padding: 24px 36px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 48px;
  text-align: center;
  width: 100%;
  color: ${css.colorWhite};
`;

const Copy = styled.p`
  line-height: 32px;
  font-weight: 200;
  color: ${css.colorWhite};
`;

const IndexPage = () => {
  const layoutProps = {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
  };

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout {...layoutProps}>
      <PageContainer>
        <FormContainer>
          <LoginForm formData={form} handleFormChange={handleFormChange} />
        </FormContainer>
        <HeaderContainer>
          <HeaderWrapper>
            <Header>Dummy heading</Header>
            <Copy>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim
              nesciunt laborum facilis magni libero earum.
            </Copy>
          </HeaderWrapper>
        </HeaderContainer>
      </PageContainer>
    </Layout>
  );
};

export default IndexPage;
