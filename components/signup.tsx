import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState({ name: '' });
  const [error, setError] = useState(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'signup', email, password, additionalInfo }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Signup successful', data.user);
    } else {
      setError(data.error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      {/* Additional input fields for more user information */}
      <input
        type='text'
        value={additionalInfo.name}
        onChange={(e) => setAdditionalInfo({ ...additionalInfo, name: e.target.value })}
        placeholder='Name'
        required
      />
      <button type='submit'>Signup</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
