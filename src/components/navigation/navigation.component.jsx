import { Outlet } from 'react-router-dom';
import {
  Container,
  LogoContainer,
  NavContainer,
  NavLink,
} from './navigation.styles';

import './navigation.styles';

// to
const currentUser = false;

export const Navigation = () => {
  return (
    <Container>
      <NavContainer>
        <NavLink to={'/'}>Home</NavLink>
        {currentUser ? (
          <NavLink as="span">SIGN OUT</NavLink>
        ) : (
          <NavLink to={'/auth'}>Sign in/up</NavLink>
        )}
        <NavLink to={'/cms'}>CMS</NavLink>
      </NavContainer>
      <Outlet />
    </Container>
  );
};
