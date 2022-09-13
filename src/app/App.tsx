import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Router } from './Router';
import { initApp } from './state/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
