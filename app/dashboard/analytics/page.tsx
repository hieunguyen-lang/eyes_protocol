"use client";

import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Chart from '../../components/Chart';
import { FiFilter, FiDownload, FiRefreshCw } from 'react-icons/fi';

export default function AnalyticsDashboard() {
  // Mock data for user acquisition chart
  const userAcquisitionData = {
    labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Email', 'Other'],
    datasets: [
      {
        label: 'User Acquisition',
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          'rgba(147, 51, 234, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(156, 163, 175, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Mock data for user engagement chart
  const userEngagementData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Page Views',
        data: [12000, 19000, 15000, 22000],
        borderColor: '#9333EA',
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'Session Duration (mins)',
        data: [4.5, 5.2, 4.8, 6.1],
        borderColor: '#0EA5E9',
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  };

  // Options for user engagement chart
  const userEngagementOptions = {
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Page Views',
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Duration (mins)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // Mock data for conversion rate chart
  const conversionRateData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Conversion Rate (%)',
        data: [1.8, 2.1, 2.5, 3.2, 3.5, 3.6, 3.8, 4.0, 4.2, 4.5, 4.8, 5.0],
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
      },
    ],
  };

  // Mock data for user retention chart
  const retentionData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'User Retention (%)',
        data: [100, 60, 45, 30, 25, 20, 18, 15],
        borderColor: '#9333EA',
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
            <p className="text-gray-500">Detailed metrics and analysis about your platform</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-secondary flex items-center">
              <FiFilter className="mr-2" />
              Filter
            </button>
            <button className="btn-secondary flex items-center">
              <FiDownload className="mr-2" />
              Export
            </button>
            <button className="btn-secondary flex items-center">
              <FiRefreshCw className="mr-2" />
              Refresh
            </button>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card p-4 border-l-4 border-accent1">
            <p className="text-sm text-gray-500">Total Visitors</p>
            <p className="text-2xl font-bold">45,281</p>
            <p className="text-sm text-green-600">↑ 12.5% vs last month</p>
          </div>
          <div className="card p-4 border-l-4 border-accent2">
            <p className="text-sm text-gray-500">Avg. Session Duration</p>
            <p className="text-2xl font-bold">4.8 mins</p>
            <p className="text-sm text-green-600">↑ 8.3% vs last month</p>
          </div>
          <div className="card p-4 border-l-4 border-accent3">
            <p className="text-sm text-gray-500">Bounce Rate</p>
            <p className="text-2xl font-bold">32.4%</p>
            <p className="text-sm text-red-600">↑ 2.1% vs last month</p>
          </div>
          <div className="card p-4 border-l-4 border-primary">
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <p className="text-2xl font-bold">5.0%</p>
            <p className="text-sm text-green-600">↑ 0.5% vs last month</p>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart 
            type="bar" 
            data={conversionRateData}
            title="Monthly Conversion Rate"
          />
          
          <Chart 
            type="line" 
            data={retentionData}
            title="User Retention"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart 
            type="bar" 
            data={userAcquisitionData}
            title="User Acquisition Channels"
          />
          
          <Chart 
            type="line" 
            data={userEngagementData}
            options={userEngagementOptions}
            title="User Engagement Metrics"
          />
        </div>
        
        {/* Detailed Analytics */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg. Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bounce Rate
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversion
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12,451</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2:45</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28.2%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6.8%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/products</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8,725</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3:12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24.5%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7.2%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/about</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5,384</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2:18</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.4%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/pricing</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4,128</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1:54</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30.7%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9.1%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/blog</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3,845</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4:05</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22.3%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 