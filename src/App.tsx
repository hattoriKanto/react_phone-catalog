import { Outlet } from 'react-router-dom';
import './App.css';
import useFetchData from './utils/useFetchData';
import { Phone } from './types/Phone';

function App() {
  const { data } = useFetchData<Phone[]>('phones.json');

  console.log(data);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
