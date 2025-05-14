"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { 
  FiHome, 
  FiPieChart, 
  FiBarChart2, 
  FiActivity,
  FiUsers, 
  FiSettings,
  FiDatabase,
  FiFileText,
  FiLogOut
} from 'react-icons/fi';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <FiPieChart className="w-5 h-5" /> },
    { name: 'Performance', path: '/dashboard/performance', icon: <FiActivity className="w-5 h-5" /> },
    { name: 'Reports', path: '/dashboard/reports', icon: <FiBarChart2 className="w-5 h-5" /> },
    { name: 'Users', path: '/dashboard/users', icon: <FiUsers className="w-5 h-5" /> },
    { name: 'Data', path: '/dashboard/data', icon: <FiDatabase className="w-5 h-5" /> },
    { name: 'Documents', path: '/dashboard/documents', icon: <FiFileText className="w-5 h-5" /> },
  ];

  const bottomMenuItems = [
    { name: 'Settings', path: '/dashboard/settings', icon: <FiSettings className="w-5 h-5" /> },
    { name: 'Logout', path: '/logout', icon: <FiLogOut className="w-5 h-5" /> },
  ];

  return (
    <aside className="h-screen bg-white w-64 border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col justify-between">
        <div className="p-4">
          <div className="py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          </div>
          <nav className="mt-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? 'bg-accent1/10 text-accent1'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
              >
                <span className={`${pathname === item.path ? 'text-accent1' : 'text-gray-500'} mr-3`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <nav className="space-y-1">
            {bottomMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? 'bg-accent1/10 text-accent1'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
              >
                <span className={`${pathname === item.path ? 'text-accent1' : 'text-gray-500'} mr-3`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 