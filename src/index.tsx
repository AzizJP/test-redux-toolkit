import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import './index.scss';

import App from './components/App/App';
import {setupStore} from './store/store';

const store = setupStore();

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
