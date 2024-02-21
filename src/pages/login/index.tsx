import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);
  

  return (
    <div>
      <h1 className="text-4xl mt-2 text-center text-blue-500 font-bold underline">
        Login to continue
      </h1>
    </div>
  );
};

export default Login;
