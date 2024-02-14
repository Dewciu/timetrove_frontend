import { useState } from 'react';

interface PasswordInputProps {
  onPasswordChange: (password: string) => void;
}

function PasswordInput({ onPasswordChange }: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const minLength = 8;
  const validatePassword = (password: string) => {
    if (password.length < minLength && password.length > 0) {
      setPasswordError(
        `Password is too short! Minimum length: ${minLength} characters.`
      );
    } else {
      setPasswordError('');
      setPassword(password);
    }
  };

  const validatePasswordConfirmation = (confirmPassword: string) => {
    if (confirmPassword !== password) {
      setPasswordConfirmError('Passwords do not match!');
    } else {
      setPasswordConfirmError('');
      onPasswordChange(password);
    }
  };
  return (
    <div>
      {passwordError && <p>{passwordError}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          minLength={minLength}
          onBlur={(event) => validatePassword(event.target.value)}
        />
      </div>
      {passwordConfirmError && <p>{passwordConfirmError}</p>}
      <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          required
          autoComplete="new-password"
          onBlur={(event) => validatePasswordConfirmation(event.target.value)}
        />
      </div>
    </div>
  );
}

export default PasswordInput;
