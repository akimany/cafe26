import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 10px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
