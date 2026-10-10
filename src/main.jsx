
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '60px 20px',
      background: '#f7f8fc',
      minHeight: '100vh'
    }}>
      <h1>Welcome to Our Store 🛍️</h1>
      <p>Discover products you love.</p>
      <button
        style={{
          padding: '12px 24px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Welcome to our store!')}
      >
        Explore Now
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
