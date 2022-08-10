import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './components/App';
import { ColorsProvider } from "./components/Context/ColorsContext";
import { UsersProvider } from './components/Context/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-runzculh.us.auth0.com"
    clientId="LuuPiciIrwmBGbQth2mPWF1qizWvrxiI"
    redirectUri={window.location.origin}
  >
   <UsersProvider>
     <App />
   </UsersProvider>
   </Auth0Provider>  
    

);

