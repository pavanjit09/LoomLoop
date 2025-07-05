// File: src/components/tabs/OrdersTab.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders, cancelOrder, deleteOrder } from '../../api';
import {
  FiXCircle,
  FiTrash2,
  FiArrowLeft,
  FiClock,
  FiCheckCircle,
  FiSlash,
  FiTool,
  FiPackage,
  FiTruck,
  FiCopy,
} from 'react-icons/fi';

/* ---------- helpers ---------- */
const normalizeStatus = (status = '') => status.trim().toLowerCase();
const statusColor = (s) =>
  s === 'cancelled'
    ? 'bg-red-600'
    : s === 'completed'
    ? 'bg-green-600'
    : s === 'shipped'
    ? 'bg-blue-600'
    : 'bg-yellow-500';

const OrdersTab = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const navigate = useNavigate();

  /* ---------- fetch on mount ---------- */
  useEffect(() => {
    (async () => {
      try {
        setOrders(await getOrders());
      } catch (e) {
        console.error(e);
        setError('Could not load orders.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ---------- actions ---------- */
  const onCancel = async (id) => {
    if (!window.confirm('Cancel this order?')) return;
    try {
      await cancelOrder(id);
      setOrders(await getOrders());
    } catch {
      alert('Failed to cancel.');
    }
  };

  const onDelete = async (id) => {
    if (!window.confirm('Delete this order permanently?')) return;
    try {
      await deleteOrder(id);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch {
      alert('Failed to delete.');
    }
  };

  /* ---------- icon renderer ---------- */
  const getStatusIcon = (status) => {
    const s = normalizeStatus(status);
    if (s === 'in production') return <FiTool        className="mr-1 text-yellow-300 animate-pulse" />;
    if (s === 'completed')     return <FiCheckCircle className="mr-1 text-green-300"  />;
    if (s === 'cancelled')     return <FiSlash       className="mr-1 text-red-300"    />;
    if (s === 'shipped')       return <FiTruck       className="mr-1 text-blue-300"   />;
    return <FiClock className="mr-1" />;
  };

  /* ---------- loading / error ---------- */
  if (loading)
    return (
      <div className="p-8 flex justify-center items-center min-h-[300px]">
        <div className="animate-pulse">
          <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto mb-4" />
          <div className="h-4 w-32 bg-gray-300 rounded mx-auto" />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="p-8 text-center text-red-700 bg-red-50 rounded-lg mx-6 border border-red-200">
        <strong className="block mb-2">⚠️ {error}</strong>
      </div>
    );

  /* ---------- render ---------- */
  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-300">
        <button
          type="button"
          onClick={() => navigate('/design-studio')}
          className="flex items-center px-5 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <FiArrowLeft className="mr-3 text-black" size={18} />
          <span className="font-bold tracking-wide text-black">BACK TO STUDIO</span>
        </button>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
          PRODUCTION ORDERS
        </h1>
        <div className="w-10" />
      </div>

      {/* Empty state */}
      {orders.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto max-w-md bg-white rounded-xl p-10 border-2 border-gray-300 shadow-lg">
            <FiPackage size={48} className="text-gray-400 mx-auto mb-6" />
            <p className="text-gray-700 mb-6 font-medium">
              NO ACTIVE PRODUCTION ORDERS
            </p>
            <button
              onClick={() => navigate('/design-studio')}
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 shadow-lg font-bold"
            >
              LAUNCH DESIGNER
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((o) => {
            const s = normalizeStatus(o.status);
            return (
              <div
                key={o._id}
                className="bg-white rounded-xl shadow-xl border-2 border-gray-300 overflow-hidden relative"
              >
                {/* Image + status pill */}
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={o.design?.image}
                    alt={`Design ${o._id}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition"
                  />
                  <div
                    className={`absolute top-3 right-3 flex items-center px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${statusColor(
                      s,
                    )}`}
                  >
                    {getStatusIcon(o.status)}
                    {o.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white font-bold text-xl">
                      {o.design?.fabric}
                    </h3>
                    <p className="text-white/90 text-sm">
                      COLOR: {o.design?.color}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-100 border-t-2 border-gray-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-black">
                      {getStatusIcon(o.status)}
                      <span className="text-sm font-bold">
                        {new Date(o.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(o._id);
                        alert(`Copied Order ID: ${o._id}`);
                      }}
                      className="flex items-center bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
                    >
                      <FiPackage size={14} className="text-gray-600" />
                      <span className="mx-1 text-xs font-mono font-bold text-black">
                        #{o._id.slice(-8).toUpperCase()}
                      </span>
                      <FiCopy size={12} className="text-gray-500" />
                    </button>
                  </div>

                  {/* Action buttons */}
                  {s !== 'cancelled' && (
                    <button
                      type="button"
                      onClick={() => onCancel(o._id)}
                      className="w-full mb-2 py-3 flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg shadow"
                    >
                      <FiXCircle className="mr-2" /> HALT PRODUCTION
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onDelete(o._id)}
                    className="w-full py-3 flex items-center justify-center hover:bg-red-700 text-black font-bold"
                  >
                    <FiTrash2 className="mr-2" /> DELETE ORDER
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrdersTab;




