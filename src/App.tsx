import { Outlet } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { getPhones } from './utils/client';

function App() {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
