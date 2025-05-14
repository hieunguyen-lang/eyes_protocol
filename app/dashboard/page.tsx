"use client";

import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';
import { FiUsers, FiActivity, FiBarChart2, FiDatabase } from 'react-icons/fi';

export default function Dashboard() {
  // Mock data for stats
  const stats = [
    { 
      title: 'Total Users', 
      value: '1,284', 
      icon: <FiUsers className="w-5 h-5" />, 
      change: { value: '12%', isPositive: true },
      color: 'accent1'
    },
    { 
      title: 'Active Sessions', 
      value: '846', 
      icon: <FiActivity className="w-5 h-5" />, 
      change: { value: '8%', isPositive: true },
      color: 'accent2' 
    },
    { 
      title: 'Conversion Rate', 
      value: '24.8%', 
      icon: <FiBarChart2 className="w-5 h-5" />, 
      change: { value: '2%', isPositive: false },
      color: 'accent3' 
    },
    { 
      title: 'Data Points', 
      value: '3.2M', 
      icon: <FiDatabase className="w-5 h-5" />, 
      change: { value: '18%', isPositive: true },
      color: 'primary' 
    },
  ];

  // Mock data for line chart
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Growth',
        data: [65, 78, 90, 81, 105, 145, 180],
        borderColor: '#9333EA',
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Activity',
        data: [40, 55, 75, 81, 95, 105, 140],
        borderColor: '#0EA5E9',
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Mock data for bar chart
  const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 22000],
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
      },
      {
        label: 'Expenses',
        data: [8000, 12000, 9000, 13000],
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
      },
    ],
  };

  // Mock table data
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Emily Johnson', email: 'emily@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Michael Brown', email: 'michael@example.com', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, view your dashboard summary below.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              title={stat.title} 
              value={stat.value} 
              icon={stat.icon} 
              change={stat.change}
              color={stat.color as any}
            />
          ))}
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart 
            type="line" 
            data={lineChartData}
            title="User Growth Trends"
          />
          
          <Chart 
            type="bar" 
            data={barChartData}
            title="Financial Performance"
          />
        </div>
        
        {/* Recent Users Table */}
        <div className="card overflow-hidden">
          <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-accent1 hover:text-accent1/80 mr-3">Edit</a>
                      <a href="#" className="text-accent3 hover:text-accent3/80">Delete</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 