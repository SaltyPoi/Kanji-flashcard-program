import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Wrapper } from './AppWrapper';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(<Wrapper/>, document.getElementById('root'));