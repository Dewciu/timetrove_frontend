import { FormEvent, useState } from 'react';

// TODO: Think about splitting this form into smaller components
// TODO: Then add address component, phone number component etc

function SignInForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setError('');
      // TODO Remove log for making a call to the API
      console.log('Form submitted');
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      isValid = false;
    }
    // TODO: Add more validation logic
    // TODO: Add validation for email exist in db etc
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          value={username}
          maxLength={20}
          minLength={3}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          minLength={8}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          required
          value={confirmPassword}
          autoComplete="new-password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <button type="submit">Sign In</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default SignInForm;
