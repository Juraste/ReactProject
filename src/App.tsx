import React from 'react';
import { Provider } from 'react-redux';
import CommentApp from './module/Comment';
import Test from './module/Test';
import Todos from './module/TODOS';
import { store } from './store';

function App() {
  // return <Todos />;
  return <CommentApp />;
}

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
