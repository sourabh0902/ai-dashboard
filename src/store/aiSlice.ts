import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AIData } from '../types/aiData';
import { mockData } from '../data/mockData';

/**
 * State interface for AI data management
 */
interface AIState {
  data: AIData | null;     // The AI analytics data
  loading: boolean;        // Loading state for async operations
  error: string | null;    // Error message if data fetch fails
}

// Initial state with no data, not loading, and no errors
const initialState: AIState = {
  data: null,
  loading: false,
  error: null,
};

/**
 * Redux slice for managing AI analytics data
 * Handles loading states, data storage, and error handling
 */
const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {
    // Set loading state when data fetch begins
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Store fetched data and clear loading state
    fetchDataSuccess: (state, action: PayloadAction<AIData>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Store error message and clear loading state
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = aiSlice.actions;

/**
 * Async thunk action to fetch AI data
 * In a real application, this would make an API call
 * Currently simulates an API call with a timeout
 */
export const fetchAIData = () => async (dispatch: any) => {
  dispatch(fetchDataStart());
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(fetchDataSuccess(mockData));
  } catch (error) {
    dispatch(fetchDataFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
};

export default aiSlice.reducer;