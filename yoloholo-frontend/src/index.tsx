import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from 'Root';
import registerServiceWorker from './registerServiceWorker';
import 'styles/base.scss';

ReactDOM.render(
  <Root />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
