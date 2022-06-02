import { SignIn } from '../../components/sign-in/sign-in.component';
import { SignUp } from '../../components/sign-up/sign-up.component';
import { AuthenticationContainer } from './authentication.styles';

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <h1>Authentication</h1>
      <SignUp />
      <SignIn />
    </AuthenticationContainer>
  );
};
