import { useState } from 'react';

interface EmailInputProps {
  onEmailChange: (email: string) => void;
}

function EmailInput({ onEmailChange }: EmailInputProps) {
  const [error, setError] = useState('');
  const validate = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email != '' && !emailRegex.test(email)) {
      setError('Invalid email! Please enter a valid email.');
    } else {
      setError('');
      onEmailChange(email);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required
        onBlur={(event) => validate(event.target.value)}
      />
    </div>
  );
}

export default EmailInput;
