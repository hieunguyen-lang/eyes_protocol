import axios from 'axios';

// Base URL for API calls
const API_BASE_URL = '/api';

// Create an axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for request
api.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor for response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific errors such as 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      // Redirect to login or handle token expiration
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  // Authentication
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  
  // Dashboard data
  dashboardStats: '/dashboard/stats',
  analyticsData: '/analytics/data',
  performanceMetrics: '/performance/metrics',
  users: '/users',
  
  // Reports
  reports: '/reports',
  generateReport: '/reports/generate',
};

// API methods
export const apiService = {
  // Get methods
  get: (url: string, params = {}) => api.get(url, { params }),
  
  // Post methods
  post: (url: string, data = {}) => api.post(url, data),
  
  // Put methods
  put: (url: string, data = {}) => api.put(url, data),
  
  // Delete methods
  delete: (url: string) => api.delete(url),
  
  // Authentication methods
  login: (credentials: { email: string; password: string }) => 
    api.post(endpoints.login, credentials),
  
  register: (userData: { name: string; email: string; password: string }) => 
    api.post(endpoints.register, userData),
  
  logout: () => api.post(endpoints.logout),
  
  // Dashboard methods
  getDashboardStats: () => api.get(endpoints.dashboardStats),
  getAnalyticsData: (params = {}) => api.get(endpoints.analyticsData, { params }),
  getPerformanceMetrics: (params = {}) => api.get(endpoints.performanceMetrics, { params }),
  
  // User methods
  getUsers: (params = {}) => api.get(endpoints.users, { params }),
  createUser: (userData: any) => api.post(endpoints.users, userData),
  updateUser: (id: string, userData: any) => api.put(`${endpoints.users}/${id}`, userData),
  deleteUser: (id: string) => api.delete(`${endpoints.users}/${id}`),
  
  // Report methods
  getReports: (params = {}) => api.get(endpoints.reports, { params }),
  generateReport: (reportConfig: any) => api.post(endpoints.generateReport, reportConfig),
};

export default apiService; 