import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.generated.css';

const domain = 'isaactalb.jp.auth0.com';
const clientId = 't6wpqvrc6snXCSnSP5zxk94MLEwenqhF';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: 'window.location.origin',
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
