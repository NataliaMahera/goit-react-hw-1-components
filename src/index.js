import App from 'components/App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
