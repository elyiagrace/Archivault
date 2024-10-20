import React from 'react';
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core';

const LoginPage = () => {
  const { isAuthenticated, user } = useDynamicContext();

  if (isAuthenticated && user) {
    return <FrontPage />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Login Required</h2>
        <p style={styles.text}>Please log in to access the site.</p>
        <DynamicWidget />
      </div>
    </div>
  );
};

const FrontPage = () => {
  const { user } = useDynamicContext();

  return (
    <div style={styles.frontPage}>
      <h1 style={styles.header}>Welcome to the Front Page</h1>
      <p style={styles.text}>You've successfully logged in, {user.displayName}!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  header: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  text: {
    marginBottom: '1rem',
    textAlign: 'center',
  },
  frontPage: {
    padding: '2rem',
  },
};

export default LoginPage;