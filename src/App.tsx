import { Outlet } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { getPhones } from './api/phones';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const phones = await getPhones();
        console.log(phones);
      } catch (error) {
        console.log('something went wrong');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
