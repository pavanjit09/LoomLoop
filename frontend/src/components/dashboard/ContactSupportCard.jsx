import React from 'react';
import { FaHeadset, FaEnvelope } from 'react-icons/fa';

const ContactSupportCard = ({
  pendingMessages = 0,
  resolvedToday   = 0,
  avgResponseTime = '—',
  onViewMessages  = () => {},
}) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md bg-white">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <FaHeadset className="text-blue-600 text-xl" />
      </div>
      <h3 className="text-lg font-medium text-gray-800">Contact Support</h3>
    </div>

    <div className="space-y-4 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Pending Tickets</span>
        <span className="font-medium text-gray-800">{pendingMessages}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Resolved Today</span>
        <span className="font-medium text-gray-800">{resolvedToday}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Avg. Response Time</span>
        <span className="font-medium text-gray-800">{avgResponseTime} hrs</span>
      </div>
    </div>

    <button
      onClick={onViewMessages}
      className="mt-6 w-full py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 flex items-center justify-center"
    >
      <FaEnvelope className="mr-2" /> View Tickets
    </button>
  </div>
);

export default ContactSupportCard;

