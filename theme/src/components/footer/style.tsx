import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Container } from '../common';
import { colors } from '../../tokens';

export const StyledFooter = styled.footer`
  max-width: 100%;
  padding: 10px 0;
  z-index: 700;
  position: relative;
  font-size: 0.9em;
  margin-top: 50px;
`;

export const FooterContainer = styled(Container)`
  text-align: right;
  line-height: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  margin: 0;
`;

export const DesignBy = styled.p`
  margin: 0;
  opacity: 0.8;
  font-size: 0.8em;

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${colors.black};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LinkStyle = css`
  color: ${colors.black};
  text-decoration: none;
`;

export const FooterMenuItem = styled.a`
  ${LinkStyle}
`;

export const FooterMenuLink = styled(Link)`
  ${LinkStyle}
`;
