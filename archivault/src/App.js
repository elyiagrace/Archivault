// App.js
//import React from 'react';
//import './App.css';
//import FrontPage from './pages/FrontPage';

//function App() {
  //return (
    //<div className="App">
      //<FrontPage />
    //</div>
  //);
//}

//export default App;

// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import EntryPage from './pages/EntryPage';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";



function App() {
  <DynamicContextProvider
    settings={{
      environmentId: process.env.REACT_APP_DYNAMIC_ENVIRONMENT_ID,
      walletConnectors: [ EthereumWalletConnectors ],
    }}></DynamicContextProvider>
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/entry" element={<EntryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
