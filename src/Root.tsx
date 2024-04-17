import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage, NotFoundPage, PhonePage } from './pages';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
