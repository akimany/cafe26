import { Outlet } from 'react-router-dom';
import {
  Container,
  LogoContainer,
  NavContainer,
  NavLink,
} from './navigation.styles';

import './navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useEffect } from 'react';

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());

  useEffect(() => {
    console.log(currentUser);
  });

  return (
    <Container>
      <NavContainer>
        <NavLink to={'/'}>Home</NavLink>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to={'/auth'}>Sign in/up</NavLink>
        )}
        <NavLink to={'/cms'}>CMS</NavLink>
      </NavContainer>
      <Outlet />
    </Container>
  );
};
