import React from 'react';
import { Brain, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Props {
  totalQueries: number;
  successfulQueries: number;
  failedQueries: number;
  averageResponseTime: number;
}

/**
 * InsightSummary Component
 * 
 * Displays key metrics in a grid of cards with icons
 * Each card shows a different aspect of the AI system's performance
 * 
 * @component
 * @param {Props} props - Component properties
 * @param {number} props.totalQueries - Total number of processed queries
 * @param {number} props.successfulQueries - Number of successful queries
 * @param {number} props.failedQueries - Number of failed queries
 * @param {number} props.averageResponseTime - Average response time in seconds
 */
export const InsightSummary: React.FC<Props> = ({
  totalQueries,
  successfulQueries,
  failedQueries,
  averageResponseTime,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Queries Card */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Queries</p>
            <p className="text-2xl font-bold">{totalQueries.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      {/* Successful Queries Card */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">Successful</p>
            <p className="text-2xl font-bold">{successfulQueries.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      {/* Failed Queries Card */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <XCircle className="w-8 h-8 text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Failed</p>
            <p className="text-2xl font-bold">{failedQueries.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      {/* Average Response Time Card */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <Clock className="w-8 h-8 text-purple-500" />
          <div>
            <p className="text-gray-500 text-sm">Avg Response Time</p>
            <p className="text-2xl font-bold">{averageResponseTime.toFixed(2)}s</p>
          </div>
        </div>
      </div>
    </div>
  );
};