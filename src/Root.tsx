import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage, NotFoundPage } from './pages';
import CartPage from './pages/Cart/CartPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import { FavoritesPage } from './pages/Favorites/FavoritesPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/phones" element={<CategoryPage />} />
          <Route path="/tablets" element={<CategoryPage />} />
          <Route path="/accessories" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
