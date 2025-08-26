import React from 'react';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../stores';

interface ErrorToastProps {
  className?: string;
}

const ErrorToast: React.FC<ErrorToastProps> = observer(() => {
  if (!authStore.showLoginError) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '16px',
      right: '16px',
      backgroundColor: '#ef4444',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 50
    }}>
      <span style={{ fontSize: '18px' }}>⚠️</span>
      <span>{authStore.loginError}</span>
      <button
        onClick={() => authStore.clearLoginError()}
        style={{
          marginLeft: '8px',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
          fontSize: '16px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#dc2626';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        ✕
      </button>
    </div>
  );
});

ErrorToast.displayName = 'ErrorToast';

export default ErrorToast;