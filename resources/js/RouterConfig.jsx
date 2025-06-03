import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayaout';
import ProductsPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
