import React, { useState } from 'react';

import Layout from 'components/Layout';
import Form from 'components/Form';

import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import styled from 'styled-components';
// import styles from 'styles/index.module.scss';

const PageContainer = styled.div`
  border: thin solid red;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 5fr 1fr;
  border: thin solid red;
  align-items: center;
`;

const IndexPage = () => {
  const layoutProps = {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
  };

  const [form, setForm] = useState({
    avatar: null,
    name: '',
    email: '',
    password: '',
    phone: '',
    repeatUse: '',
    user: '',
    userType: 'Admin',
  });

  const handleFormChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout {...layoutProps}>
      <PageContainer>
        <Form formData={form} handleFormChange={handleFormChange} />
        <div>Dummy heading</div>
      </PageContainer>
    </Layout>
  );
};

export default IndexPage;
