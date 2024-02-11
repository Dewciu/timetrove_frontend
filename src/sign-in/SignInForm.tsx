import { FormEvent, useState } from 'react';
import UsernameInput from './UsernameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

// TODO: Think about splitting this form into smaller components
// TODO: Then add address component, phone number component etc

function SignInForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setError('');
      // TODO Remove log for making a call to the API
      console.log('Form submitted');
      console.log('Username: ', username);
      console.log('Email: ', email);
      console.log('Password: ', password);
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    // if (password !== confirmPassword) {
    //   setError('Passwords do not match!');
    //   isValid = false;
    // }
    // TODO: Add more validation logic
    // TODO: Add validation for email exist in db etc
    return isValid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UsernameInput onUsernameChange={setUsername} />
        <EmailInput onEmailChange={setEmail} />
        <PasswordInput onPasswordChange={setPassword} />
        <button type="submit">Sign In</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default SignInForm;
