import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAction, signUpStart } from '../../store/user/user.action';
import { InputContainer, SignUpContainer } from './sign-up.styles';

const defaultFormValues = {
  displayName: 'akimany',
  email: 'akimany@yahoo.co.uk',
  fullName: 'Aamar Khan',
  password: '112233',
  repeatPassword: '112233',
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, displayName, fullName, password, repeatPassword } = formFields;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      alert('Passwords not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') alert('In use');
      else {
        console.log('error here:', error.message);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Sign up test</button>

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
          <label htmlFor="displayName">Display Name </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            autoComplete={displayName}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="fullName">Full name </label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            autoComplete={fullName}
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
        <InputContainer>
          <label htmlFor="repeatPassword">Repeat password </label>
          <input
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={handleChange}
            autoComplete={repeatPassword}
          />
        </InputContainer>
      </form>
    </SignUpContainer>
  );
};
