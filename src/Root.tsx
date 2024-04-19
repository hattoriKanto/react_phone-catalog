import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage, NotFoundPage, PhonePage } from './pages';
import { DumpPage } from './pages/DumpPage';
import { TabletsPage } from './pages/TabletsPage';
import AccessoriesPage from './pages/AccessoriesPage/AccessoriesPage';
import CartPage from './pages/Cart/CartPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/dump" element={<DumpPage />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
