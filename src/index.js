import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import enUS from 'antd/lib/locale-provider/en_US';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import { LocaleProvider } from 'antd';

ReactDOM.render(<LocaleProvider locale={ru_RU}><App /></LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
