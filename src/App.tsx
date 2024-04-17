import './App.css';
import useFetchData from './utils/useFetchData';
import { Phone } from './types/Phone';

import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const { data, isLoading, error } = useFetchData<Phone[]>('phones.json');

  !isLoading && console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
