import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchAIData } from './store/aiSlice';
import { InsightSummary } from './components/InsightSummary';
import { CategoryChart } from './components/CategoryChart';
import { ResponseTimeChart } from './components/ResponseTimeChart';
import { SatisfactionChart } from './components/SatisfactionChart';
import { Loader2 } from 'lucide-react';

/**
 * Main App Component
 * 
 * Serves as the root component for the AI Insights Dashboard
 * Manages data fetching and displays all visualization components
 * Handles loading and error states
 * 
 * @component
 */
function App() {
  const dispatch = useDispatch<AppDispatch>();
  // Select AI data state from Redux store
  const { data, loading, error } = useSelector((state: RootState) => state.ai);

  // Fetch data when component mounts
  useEffect(() => {
    dispatch(fetchAIData());
  }, [dispatch]);

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  // Show error message if data fetch fails
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  // Don't render anything if data is not available
  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Insights Dashboard</h1>
        
        {/* Key metrics summary */}
        <InsightSummary 
          totalQueries={data.insight_summary.total_queries}
          successfulQueries={data.insight_summary.successful_queries}
          failedQueries={data.insight_summary.failed_queries}
          averageResponseTime={data.insight_summary.average_response_time}
        />

        {/* First row of charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CategoryChart data={data.category_distribution} />
          <ResponseTimeChart 
            data={data.response_times.day_wise}
            title="Response Times (Daily)"
          />
        </div>

        {/* Second row of charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SatisfactionChart data={data.user_satisfaction.ratings} />
          <ResponseTimeChart 
            data={data.response_times.week_wise}
            title="Response Times (Weekly)"
          />
        </div>
      </div>
    </div>
  );
}

export default App;