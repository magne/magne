import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Theme from '../styles/theme';

interface IErrorProps {
  location: Location;
}

const Error = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 75vh;
  text-align: center;
`;

const ErrorTitle = styled.h1`
  display: block;
  font-size: 8em;
  font-weight: bold;
  opacity: 0.45;
  width: 100%;
  margin: 0 0 15px;
`;

const ErrorDescription = styled.h2`
  font-size: 1.8em;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;

const BackLink = styled(Link)`
  color: ${Theme.layout.primaryColor};
  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage: FunctionComponent<IErrorProps> = ({ location }) => (
  <Layout bigHeader={false}>
    <SEO location={location} title={`Page not found`} />
    <Error>
      <ErrorTitle>404</ErrorTitle>
      <ErrorDescription>Page not found</ErrorDescription>
      <BackLink to={`/`}>{/* Country roads... */} Take me home!</BackLink>
    </Error>
  </Layout>
);

export default NotFoundPage;
