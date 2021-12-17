import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../../store/authentication/authentication.slice';
import { UserCredentialsType } from '../../../utils/types/formData.types';

function LoginForm() {
  const [formData, setFormData] = useState<UserCredentialsType>({
    username: '',
    password: ''
  });
  const [messages, setMessages] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authenticateUser({body: formData, setMessages: setMessages}));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Log In
        <label htmlFor='username'>Username</label>
        <input id='username' name='username' type='text' value={formData.username} onChange={handleChange} />
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} />
        <input type='submit' />
      </form>
      <Link to='/login?new_user=true'>Need an account?</Link>
    </div>
  );
}

export default LoginForm;