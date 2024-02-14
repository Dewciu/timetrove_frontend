import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// EXPERIMENTAL

interface PhoneNumberInputProps {
  onPhoneNumberChange: (phoneNumber: string) => void;
}

function PhoneNumberInput({ onPhoneNumberChange }: PhoneNumberInputProps) {
  const [error, setError] = useState('');
  const [value, setValue] = useState<string | undefined>('');
  const validate = (phoneNumber: string | null) => {
    if (phoneNumber && !isValidPhoneNumber(phoneNumber)) {
      setError('Invalid phone number! Please enter a valid phone number.');
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label htmlFor="phone_number">Phone Number</label>
      <PhoneInput
        defaultCountry="PL"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        onBlur={(event) => validate(event.target.nodeValue)}
      />
    </div>
  );
}

export default PhoneNumberInput;
