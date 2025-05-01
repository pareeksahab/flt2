// This is your main React component (App.js or App.jsx)
import { useState } from 'react';

const initialOrders = [
  { id: 'ORD-7824', destination: 'JKB Central Warehouse', truck: 'Truck #101', departure: 'Today, 8:00 AM', eta: ' 'Today, 12:00 PM', status: 'On Route' },
  { id: 'ORD-7825', destination: 'JKB South Distribution Hub', truck: 'Truck #105', departure: 'Today, 10:30 AM', eta: 'Today, 3:30 PM', status: 'Loading' },
  { id: 'ORD-7826', destination: 'JKB Express Retail Outlet', truck: 'Truck #108', departure: 'Today, 1:00 PM', eta: 'Today, 5:00 PM', status: 'Delayed' },
  { id: 'ORD-7827', destination: 'JKB North Distribution Hub', truck: 'Truck #112', departure: 'Today, 3:00 PM', eta: 'Today, 7:00 PM', status: 'Scheduled' },
  { id: 'ORD-7820', destination: 'Tezpur Main Center', truck: 'Truck #097', departure: 'Yesterday, 9:00 AM', eta: 'Yesterday, 2:30 PM', status: 'Delivered' },
  { id: 'ORD-7821', destination: 'Tezpur East Hub', truck: 'Truck #099', departure: 'Yesterday, 10:15 AM', eta: 'Yesterday, 3:45 PM', status: 'Delivered' }
];

const weeklySchedule = {
  'Monday': 'Howraghat',
  'Tuesday': 'Local / Dhing',
  'Wednesday': 'Dobka / Hojai',
  'Thursday': 'Tezpur',
  'Friday': 'JKB',
  'Saturday': 'JKB',
  'Sunday': 'Off (Special Deliveries Only)'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [newOrder, setNewOrder] = useState({
    id: `ORD-${Math.floor(7828 + Math.random() * 100)}`,
    destination: '',
    truck: '',
    departure: '',
    eta: '',
    status: 'Scheduled'
  });

  const getStatusClass = (status) => {
    switch(status) {
      case 'Delivered':
      case 'On Route':
        return 'bg-green-100 text-green-600';
      case 'Loading':
      case 'Scheduled':
        return 'bg-yellow-100 text-yellow-600';
      case 'Delayed':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    setOrders([newOrder, ...orders]);
    setFormVisible(false);
    setNewOrder({
      id: `ORD-${Math.floor(7828 + Math.random() * 100)}`,
      destination: '',
      truck: '',
      departure: '',
      eta: '',
      status: 'Scheduled'
    });
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
    setSelectedOrderId(null);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Fleet Logistics Dashboard</h1>
      <div className="flex space-x-2 mb-4">
        {['Dashboard', 'Orders', 'Dispatch', 'Routes', 'Reports', 'Settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* More content (Dashboard, Forms, Tables) can be added below */}
    </div>
  );
}
