import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CustomDesignStudio from './pages/CustomDesignStudio';
import OrdersTab from './components/tabs/OrdersTab';
import SupportTab from './components/tabs/SupportTab';
import { useAuth } from './context/AuthContext';
import FavoritesTab from './components/tabs/FavoritesTab';

/* Guard */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const AppRoutes = () => {
  const location = useLocation();
  const hideShell = ['/design-studio', '/orders', '/support','/favorites'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideShell && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route
          path="/design-studio"
          element={
            <ProtectedRoute>
              <CustomDesignStudio />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersTab />
            </ProtectedRoute>
          }
        />

        {/* 🆕 support route */}
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <SupportTab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritesTab />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideShell && <Footer />}
    </div>
  );
};

export default AppRoutes;


