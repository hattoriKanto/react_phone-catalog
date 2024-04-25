import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import {
  HomePage,
  NotFoundPage,
  ProductPage,
  CartPage,
  FavoritesPage,
  CategoryPage,
} from './pages';
import { SearchContextProvider } from './context/SearchContext';

export const Root = () => {
  return (
    <Router>
      <SearchContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route>
              <Route path="/phones" element={<CategoryPage />} />
              <Route path="/phones/:prodId?" element={<ProductPage />} />
            </Route>
            <Route>
              <Route path="/tablets" element={<CategoryPage />} />
              <Route path="/tablets/:prodId?" element={<ProductPage />} />
            </Route>
            <Route>
              <Route path="/accessories" element={<CategoryPage />} />
              <Route path="/accessories/:prodId?" element={<ProductPage />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </SearchContextProvider>
    </Router>
  );
};
