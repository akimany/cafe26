import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, NavContainer, NavLink } from './navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';

// Styles
import './navigation.styles';

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());

  // TODO: ensure logged in pages can only be directly accessed with currentUser

  return (
    <Container>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        {currentUser && (
          <NavLink as="span" onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        )}
        {currentUser && <NavLink to="/cms">CMS</NavLink>}
        {!currentUser && <NavLink to="/auth">Sign In</NavLink>}
      </NavContainer>
      <Outlet />
    </Container>
  );
};
