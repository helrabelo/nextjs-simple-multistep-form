import React, { useState } from 'react';

import Layout from 'components/Layout';
import { LoginForm } from 'components/Form';

import {
  css,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import {
  PageContainer,
  FormContainer,
  HeaderContainer,
  HeaderWrapper,
  Header,
  Copy,
} from 'components/globals';

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
