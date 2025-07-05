import React from 'react';
import { FiPackage } from 'react-icons/fi';

const OrderTrackingCard = ({
  inProgress = 0,
  completed = 0,
  cancelled = 0,
  onViewOrders = () => {},
}) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md bg-white">
    <div className="flex items-center mb-4">
      <div className="bg-green-100 p-3 rounded-full mr-4">
        <FiPackage className="text-green-600 text-xl" />
      </div>
      <h3 className="text-lg font-medium text-gray-800">Order Tracking</h3>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">In Progress</span>
        <span className="font-medium text-gray-800">{inProgress}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Completed</span>
        <span className="font-medium text-gray-800">{completed}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Cancelled</span>
        <span className="font-medium text-gray-800">{cancelled}</span>
      </div>
    </div>

    <button
      onClick={onViewOrders}
      className="mt-6 w-full py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100"
    >
      View All Orders
    </button>
  </div>
);

export default OrderTrackingCard;
