import React from 'react';
import { Provider } from 'react-redux';
import CommentApp from './module/Comment';
import { store } from './store';

function App() {
  return <CommentApp />;
}

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
