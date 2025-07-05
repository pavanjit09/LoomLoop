import React from 'react';

const OrderConfirmModal = ({ design, onClose, onConfirm }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-white p-6 rounded-lg max-w-sm w-full" onClick={e=>e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-4">Place Order?</h2>
      <img src={design.image} alt="" className="h-40 w-full object-cover rounded mb-4" />
      <p className="text-sm text-gray-700 mb-6">
        Fabric: {design.fabric} • Color: {design.color} • Artisan: {design.artisan}
      </p>
      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 bg-green-600 text-white rounded">Confirm</button>
      </div>
    </div>
  </div>
);
export default OrderConfirmModal;
