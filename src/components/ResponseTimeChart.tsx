import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResponseTime } from '../types/aiData';

interface Props {
  data: ResponseTime[];
  title: string;
}

export const ResponseTimeChart: React.FC<Props> = ({ data, title }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={data[0].date ? 'date' : 'week'} />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="average_time" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};