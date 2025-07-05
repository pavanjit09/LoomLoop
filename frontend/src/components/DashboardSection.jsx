// File: src/components/DashboardSection.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OrderTrackingCard   from './dashboard/OrderTrackingCard';
import ContactSupportCard  from './dashboard/ContactSupportCard';
import FavoritesCard       from './dashboard/FavoritesCard';

import {
  getOrders,
  getDesigns,
  getSupportStats,
  getFavoritesStats,   // 🆕 helper from api.js
} from '../api';

const DashboardSection = () => {
  /* ---------- state ---------- */
  const [orders,           setOrders]           = useState([]);
  const [designs,          setDesigns]          = useState([]);
  const [pendingMessages,  setPendingMessages]  = useState(0);
  const [resolvedToday,    setResolvedToday]    = useState(0);
  const [avgResponseTime,  setAvgResponseTime]  = useState('—');
  const [favoriteProducts, setFavoriteProducts] = useState(0);
  const [lastFavoriteAdded,setLastFavoriteAdded]= useState('—');

  const navigate = useNavigate();

  /* ---------- fetch on mount ---------- */
  useEffect(() => {
    getOrders().then(setOrders);
    getDesigns().then(setDesigns);

    // support card stats
    getSupportStats().then(({ pending, resolved, avg }) => {
      setPendingMessages(pending);
      setResolvedToday(resolved);
      setAvgResponseTime(avg);
    });

    // favorites card stats
    getFavoritesStats().then(({ count, lastAdded }) => {
      setFavoriteProducts(count);
      setLastFavoriteAdded(
        lastAdded ? new Date(lastAdded).toLocaleDateString() : '—'
      );
    });
  }, []);

  /* ---------- derived counts ---------- */
  const ordersInProduction = orders.filter(o => o.status === 'In production').length;
  const ordersCancelled    = orders.filter(o => o.status === 'Cancelled').length;
  const ordersCompleted    = orders.length - ordersInProduction - ordersCancelled;
  const savedDesigns       = designs.length;

  /* ---------- render ---------- */
  return (
    <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-600 to-emerald-500">
        <h2 className="text-xl font-semibold text-white">Customer Dashboard</h2>
        <p className="text-green-100">
          Track your orders, contact support, and check favorites
        </p>
      </div>

      {/* Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <OrderTrackingCard
          inProgress={ordersInProduction}
          completed={ordersCompleted}
          cancelled={ordersCancelled}
          onViewOrders={() => navigate('/orders')}
        />

        <ContactSupportCard
          pendingMessages={pendingMessages}
          resolvedToday={resolvedToday}
          avgResponseTime={avgResponseTime}
          onViewMessages={() => navigate('/support')}
        />

        <FavoritesCard
          savedDesigns={savedDesigns}
          favoriteProducts={favoriteProducts}
          lastAdded={lastFavoriteAdded}
          onViewFavorites={() => navigate('/favorites')}
        />
      </div>
    </div>
  );
};

export default DashboardSection;




