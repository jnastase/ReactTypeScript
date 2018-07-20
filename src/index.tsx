import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Label } from './components/Label';
import TodoList from './components/TodoList';

// ReactDom.render(<Label text="hey" />,
//     document.getElementById('root'));

ReactDom.render(<TodoList />,
    document.getElementById('root'));