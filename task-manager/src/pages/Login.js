import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '../firebase/firebase'; // Import Firebase auth and sign-in function
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect to dashboard if logged in
    }
  }, [user, navigate]);

  const handleGoogleSignIn = () => {
    signInWithGoogle(); // Call the function to sign in with Google
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {/* Add more sign-in methods here */}
    </div>
  );
};

export default Login;
