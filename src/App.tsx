import './App.css';
import useFetchData from './utils/useFetchData';
import { Phone } from './types/Phone';

import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const { data } = useFetchData<Phone[]>('phones.json');

  console.log(data);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
