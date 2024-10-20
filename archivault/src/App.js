import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import LoginPage from './pages/LoginPage';
import EntryPage from './pages/EntryPage';

function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.REACT_APP_DYNAMIC_ENVIRONMENT_ID,
        walletConnectors: [ EthereumWalletConnectors ],
      }}
    >
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/entry" element={<EntryPage />} />
          </Routes>
        </div>
      </Router>
    </DynamicContextProvider>
  );
}

export default App;