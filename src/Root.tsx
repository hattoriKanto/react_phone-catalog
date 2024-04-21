import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage, NotFoundPage, PhonePage } from './pages';
import TabletsPage from './components/TabletsPage/TabletsPage';
import AccessoriesPage from './components/AccessoriesPage/AccessoriesPage';
import CartPage from './pages/Cart/CartPage';
import { ProductPage } from './pages/ProductPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/phones">
            <Route index element={<PhonePage />} />
            <Route path="/phones/:prodId?" element={<ProductPage />} />
          </Route>
          <Route>
            <Route path="/tablets" element={<TabletsPage />} />
            <Route path="/tablets/:prodId?" element={<ProductPage />} />
          </Route>
          <Route>
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/accessories/:prodId?" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
