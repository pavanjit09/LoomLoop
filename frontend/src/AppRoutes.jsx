import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CustomDesignStudio from './pages/CustomDesignStudio';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const AppRoutes = () => {
  const location = useLocation();
  const isStudioPage = location.pathname === '/design-studio';

  return (
    <div className="min-h-screen flex flex-col">
      {!isStudioPage && <Navbar />}
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
      </Routes>
      {!isStudioPage && <Footer />}
    </div>
  );
};

export default AppRoutes;

