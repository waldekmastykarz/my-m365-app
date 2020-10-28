import { Providers, ProviderState } from '@microsoft/mgt';
import { Agenda, Login } from '@microsoft/mgt-react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  Providers.globalProvider.onStateChanged(e => {
    if (Providers.globalProvider.state !== ProviderState.Loading) {
      setIsLoggedIn(Providers.globalProvider.state === ProviderState.SignedIn);
    }
  });

  return (
    <div className="App">
      <header>
        <Login />
      </header>
      <div>
        {isLoggedIn &&
          <Agenda />}
      </div>
    </div>
  );
}

export default App;
