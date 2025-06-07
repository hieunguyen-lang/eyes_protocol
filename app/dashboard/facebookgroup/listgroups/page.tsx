"use client";

import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import StatCard from '../../../components/StatCard';
import Chart from '../../../components/Chart';
import { FiUsers, FiActivity, FiBarChart2, FiDatabase, FiAlertCircle } from 'react-icons/fi';
import { useEffect, useState, useCallback,Fragment } from 'react';
import { apiService } from '../../../utils/api';
import { Stat, ChartData, TableGroupData } from '../../../types';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../context/AuthContext'
import Select from "react-select";
import { Dialog, Transition } from "@headlessui/react";
interface OptionType {
  value: number
  label: string
}

export default function Dashboard() {

  const [tableData, setTableData] = useState<TableGroupData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalItems, setTotalItems] = useState(0);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const router = useRouter()

  //check log in
  const { isLoggedIn,loading } = useAuth()
  useEffect(() => {
    if (!loading && !isLoggedIn) {
        router.push('/login?message=unauthorized')
      }
    }, [loading, isLoggedIn])
    
  //search filter
  const [searchName, setSearchName] = useState("");
  const [searchGroupType, setSearchGroupType] = useState("");
  const [searchGroupid, setSearchGroupid ] = useState("");
  
  
    // Hàm xử lý chuyển trang
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    fetchStats(page ,{
    name: searchName,
    group_id: searchGroupid,
    group_type: searchGroupType,

  });
  };



  async function fetchStats(offset: number,filters?: { name?: string; group_id?: string,group_type?: string }) {
        try {
          const params = {
            offset: (offset-1) * itemsPerPage,
            limit: 10,
            group_id: filters?.group_id || '', 
            group_name: filters?.name || '',
            group_type: filters?.group_type || '',

          };

          const response = await apiService.getgroups(params);
          console.log(response.data)
          // Kiểm tra nếu có dữ liệu trong response.data và nếu đó là một mảng
          if (!response?.data || !Array.isArray(response.data)) {
            throw new Error("Invalid posts data");
          }
          
          const processed = response.data.map((post: any) => {
            
            return {
              group_id: post.group_id,
              group_name: post.group_name,
              group_type: post.group_type,
              last_crawled: post.last_crawled,
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
      fetchStats(1,{name: searchName,group_id: searchGroupid, group_type: searchGroupType });
  }, [searchName, searchGroupid,searchGroupType]);

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
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupUrl, setNewGroupUrl] = useState("");
  const [newGroupType, setNewGroupType] = useState("default");
  const [errorMessage, setErrorMessage] = useState(""); 
  const handleAddGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiService.addgroups({
        list_url: newGroupUrl,
        group_type: newGroupType,
      });
      setIsModalOpen(false);
      fetchStats(1);
    } catch (error: any) {
      setErrorMessage("Error: " + (error?.response?.data?.detail || "Unknown error")); // Hiển thị thông báo lỗi
      console.error("Error adding group:", error);
    }
  };

  
    // Gọi hàm
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* <div>
          <h1 className="text-2xl font-bold text-gray-800">Facebook Comment</h1>
        </div>
        */}
        {/*Filter data */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by post id..."
              value={searchGroupid}
              onChange={(e) => setSearchGroupid(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          
          
          
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 w-5 h-5 mr-2" />Facebook Group Comments
          </h2>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add Group
          </button>
        </div>
          {/* Modal */}
        <Transition show={isModalOpen} as={Fragment}>
          <Dialog onClose={setIsModalOpen} className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black opacity-30" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <div className="w-full max-w-[80%] sm:max-w-3xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">                  
                  <Dialog.Title className="text-lg font-bold">Add New Group</Dialog.Title>
                  <form onSubmit={handleAddGroup} className="space-y-4 mt-4">
                    <div className="space-y-4">
                      {/* Group URL */}
                      <div className="flex items-start gap-2">
                        <label className="w-40 text-gray-700 text-sm font-medium pt-2">Group URL:</label>
                        <div className="flex-1">
                          <input
                            type="text"
                            value={newGroupUrl}
                            onChange={(e) => setNewGroupUrl(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Example: https://www.facebook.com/groups/2680623225599179"
                            required
                          />
                          <p className="px-2 text-sm text-gray-500 mt-1">* Chỉ chọn được group công khai </p>
                        </div>
                      </div>

                      {/* Group Type */}
                      <div className="flex items-start gap-2">
                        <label className="w-40 text-gray-700 text-sm font-medium pt-2">Group Type:</label>
                        <select
                          value={newGroupType}
                          onChange={(e) => setNewGroupType(e.target.value)}
                          className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                          required
                        >
                          <option value="Default">Default</option>
                          <option value="homestay">homestay</option>
                          <option value="webdesign">webdesign</option>
                        </select>
                      </div>
                      {/* Error Message */}
                      {errorMessage && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                      )}
                      

                      {/* Submit */}
                      <div className="flex justify-center pt-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Thêm nhóm
                        </button>
                      </div>
                    </div>
                  </form>                  
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition> 
        {/* Recent Users Table */}
        <div className="card overflow-hidden">
          <h2 className="text-lg font-semibold mb-4"><FontAwesomeIcon icon={faFacebook} className="text-blue-600 w-5 h-5 mr-2" />Facebook Group Comments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 overflow-visible">
              <thead className="bg-gray-50">
                <tr className="group relative">
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Group ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Group Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Group Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-1200 uppercase tracking-wider">
                    Last Crawled
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item) => (
                  <tr  className="group relative hover:bg-purple-50 cursor-pointer" >
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <a href={`https://www.facebook.com/groups/${item.group_id}`} className="text-sm  block" target="_blank">
                        <div className="text-sm text-gray-500 max-w-[800px] max-h-[100px] overflow-hidden font-medium text-gray-900 text-ellipsis">{item.group_id}</div>
                     </a>
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <a href={`https://www.facebook.com/groups/${item.group_id}`} className="text-sm  block" target="_blank">
                        <div className="text-sm text-gray-500 max-w-[800px] max-h-[100px] overflow-hidden font-medium text-gray-900 text-ellipsis">{item.group_name}</div>
                      </a>
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <a href={`https://www.facebook.com/groups/${item.group_id}`} className="text-sm  block" target="_blank">
                        <div className="text-sm text-gray-500 max-w-[800px] max-h-[100px] overflow-hidden font-medium text-gray-900 text-ellipsis">{item.group_type}</div>
                      </a>
                      
                    </td>
                    <td className="min-h-[30px] max-h-[30px] px-6 py-4 whitespace-nowrap">
                      <div className="min-h-[30px] max-h-[30px] text-sm font-medium text-gray-900">{item.last_crawled}</div>
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