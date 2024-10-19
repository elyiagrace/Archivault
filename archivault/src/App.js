// App.js
import React from 'react';
import './App.css';
import FrontPage from './pages/FrontPage';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";



function App() {
  <DynamicContextProvider
    settings={{
      environmentId: process.env.REACT_APP_DYNAMIC_ENVIRONMENT_ID,
      walletConnectors: [ EthereumWalletConnectors ],
    }}></DynamicContextProvider>
  return (
    <div className="App">
      <FrontPage />
    </div>
  );
}

export default App;