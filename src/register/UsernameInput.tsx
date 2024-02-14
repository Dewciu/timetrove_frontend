import { useState } from 'react';

interface UsernameInputProps {
  onUsernameChange: (username: string) => void;
}

function UsernameInput({ onUsernameChange }: UsernameInputProps) {
  const [error, setError] = useState('');
  const maxLength = 20;
  const minLength = 3;
  const validate = (username: string) => {
    if (username.length < minLength && username.length > 0) {
      setError(
        `Username is too short! Minimum length: ${minLength} characters.`
      );
    } else if (username.length > maxLength) {
      setError(
        `Username is too long! Maximum length: ${maxLength} characters.`
      );
    } else {
      setError('');
      onUsernameChange(username);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        required
        maxLength={maxLength}
        minLength={minLength}
        onBlur={(event) => validate(event.target.value)}
      />
    </div>
  );
}

export default UsernameInput;
