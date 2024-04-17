import { Outlet } from 'react-router-dom';
import './App.css';
import useFetchData from './utils/client';
import { Phone } from './types/Phone';

function App() {
  const { data, isLoading, error } = useFetchData<Phone[]>('phones.json');

  !isLoading && console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
