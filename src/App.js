import React, { useState } from 'react';
import Home from './components/Home';
import PrivacyCenter from './components/PrivacyCenter';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyCenter onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
}

export default App;
