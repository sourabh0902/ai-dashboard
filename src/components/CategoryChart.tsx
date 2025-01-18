import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CategoryDistribution } from '../types/aiData';

interface Props {
  data: CategoryDistribution;
}

/**
 * CategoryChart Component
 * 
 * Displays a bar chart showing the distribution of queries across different categories
 * Uses Recharts for visualization and automatically formats category names
 * 
 * @component
 * @param {Props} props - Component properties
 * @param {CategoryDistribution} props.data - Distribution data for different query categories
 */
export const CategoryChart: React.FC<Props> = ({ data }) => {
  // Transform the data for the chart and format category names
  const chartData = Object.entries(data).map(([name, value]) => ({
    name: name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    value,
  }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Query Categories</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};