import { useState } from 'react';
import { InputContainer, SignInContainer } from './sign-in.styles';

const defaultFormValues = {
  email: '',
  password: '',
};
export const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
