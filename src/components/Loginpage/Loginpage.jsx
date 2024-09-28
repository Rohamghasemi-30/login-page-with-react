import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import './LoginPage.css'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const MainEmail = 'ghasemiroham71@gmail.com';
  const MaintPassword = '1234';

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === MainEmail && password === MaintPassword) {
      toast.success('Successfully toasted!');
    } else {
      toast.error("Gmail or password is wrong.");
    }
  };


  return (
    <div className={`login-container`}>
      <h2 className='icon-user'><FaUser/><br />login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Toaster />
    </div>
  );
}

export default LoginPage;
