"use client";

import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import StatCard from '../../../components/StatCard';
import Chart from '../../../components/Chart';
import { FiUsers, FiActivity, FiBarChart2, FiDatabase,FiAlertCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { apiService } from '../../../utils/api';
import { Stat, ChartData, TablePostData } from '../../../types';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../context/AuthContext'
export default function Dashboard() {

  const [tableData, setTableData] = useState<TablePostData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalItems, setTotalItems] = useState(0);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const router = useRouter()
  const { isLoggedIn } = useAuth()
    // Hàm xử lý chuyển trang
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    fetchStats(page);
  };

  useEffect(() => {
  if (!isLoggedIn) {
      router.push('/login?message=unauthorized')
    }
  }, [isLoggedIn])
  async function fetchStats(offset: number) {
        try {
          const params = {
            offset: offset,
            limit: 10,
            group_ids: [
              "462482521683005",
              "434990041885698",
              "863933957570229",
              "751860423062303",
              "1198365520521080"
            ],
            group_type: "homestay"
          };

          const response = await apiService.getpostsStats(params);
          console.log(response.data)
          // Kiểm tra nếu có dữ liệu trong response.data và nếu đó là một mảng
          if (!response?.data || !Array.isArray(response.data)) {
            throw new Error("Invalid posts data");
          }
          
          const processed = response.data.map((post: any) => {
            
            return {
              posturl: post.post_url,
              name: post.user_name,
              content: post.content,
              content_created: post.content_created,
              created_at: post.created_at,
              hours_diff: post.hours_diff,
              reaction_count: post.reaction_count,
              comment_count: post.comment_count,
              share_count: post.share_count
            };
          });
          setTotalItems(response.total)
          console.log("Total items:", response.total)
          setTableData(processed);
          setCurrentPage(offset);  
        } catch (error) {
          console.error("Error fetching stats:", error);
        }
    }
  useEffect(() => {
      console.log("useEffect running!");
      fetchStats(1);
  }, []);

  const getPaginationRange = (currentPage: number, totalPages: number): (number | string)[] => {
  const delta = 2;
  const range: (number | string)[] = [];
  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  // Always include the first page
  range.push(1);

  // Add "..." if there's a gap between 1 and left
  if (left > 2) {
    range.push("...");
  }

  // Add page numbers between left and right
  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  // Add "..." if there's a gap between right and last page
  if (right < totalPages - 1) {
    range.push("...");
  }

  // Always include the last page
  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
};
  

  
    // Gọi hàm
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        </div>
        
        {/* Recent Users Table */}
        <div className="card overflow-hidden">
          <h2 className="text-lg font-semibold mb-4"><FontAwesomeIcon icon={faFacebook} className="text-blue-600 w-5 h-5 mr-2" />Facebook Group Post</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 overflow-visible">
              <thead className="bg-gray-50">
                <tr className="group relative">
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Content Post
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Thời gian đăng bài
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Thời gian lấy bài
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Độ trễ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item) => (
                  <tr  className="group relative hover:bg-purple-50 cursor-pointer" onClick={() => window.open(item.posturl, '_blank')}>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 max-w-[800px] max-h-[100px] overflow-hidden font-medium text-gray-900 text-ellipsis">{item.name}</div>
                      
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <a href={item.posturl} className="text-sm  block" target="_blank">
                        <div className="text-sm text-gray-500 max-w-[800px] max-h-[100px] overflow-hidden font-medium text-gray-900 text-ellipsis">{item.content}</div>
                      </a>
                      
                      {/* Popup */}
                      <div className="absolute hidden group-hover:block z-50 left-0 top-full mt-2 
                          w-[800px] max-h-[600px] overflow-auto p-4 bg-white border border-gray-300 
                          shadow-lg rounded-md">
                        <p className="text-sm text-gray-800 break-words whitespace-normal">{item.content}</p>
                      </div>
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <div className="min-h-[30px] max-h-[30px] text-sm font-medium text-gray-900">{item.content_created}</div>
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <div className="min-h-[30px] max-h-[30px] text-sm font-medium text-gray-900">{item.created_at}</div>
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <div className="min-h-[30px] max-h-[30px] text-sm font-medium text-gray-900">{item.hours_diff}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Thêm phần phân trang */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(indexOfLastItem, tableData.length)}
                  </span>{' '}
                  of <span className="font-medium">{tableData.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {getPaginationRange(currentPage, totalPages).map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && handlePageChange(page)}
                      disabled={page === '...'}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        currentPage === page
                          ? 'z-10 bg-accent1 border-accent1 text-white'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      } ${page === '...' && 'cursor-default'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 