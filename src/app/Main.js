import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './AppRouting';
// CSS imports


render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));

module.hot.accept();


