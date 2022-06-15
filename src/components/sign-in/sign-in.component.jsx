import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart } from '../../store/user/user.action';
import { InputContainer, SignInContainer } from './sign-in.styles';

const defaultFormValues = {
  email: '',
  password: '',
};
export const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('wrong password');
          break;
        case 'auth/user-not-found':
          alert('user not found');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Sign in</h2>
      <form>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete={email}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Enter password </label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete={password}
          />
        </InputContainer>
        <button type="submit" onSubmit={handleSubmit}>
          Sign in
        </button>
      </form>
    </SignInContainer>
  );
};
