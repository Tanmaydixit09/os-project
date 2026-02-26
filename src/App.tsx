import React, { useState } from 'react';
import { useAuthStore } from './store/authStore';
import { LoginForm } from './components/LoginForm';
import { ChatInterface } from './components/ChatInterface';
import { LandingPage } from './components/LandingPage';

function App() {
  const user = useAuthStore(state => state.user);
  const [showLogin, setShowLogin] = useState(false);

  if (user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <ChatInterface />
      </div>
    );
  }

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gray-100">
        <LoginForm onBack={() => setShowLogin(false)} />
      </div>
    );
  }

  return (
    <LandingPage onGetStarted={() => setShowLogin(true)} />
  );
}

export default App;
