/**
 * Type definitions for AI analytics data
 */

/** Summary metrics for AI system performance */
export interface InsightSummary {
  total_queries: number;      // Total number of queries processed
  successful_queries: number; // Number of successfully handled queries
  failed_queries: number;     // Number of failed queries
  average_response_time: number; // Average response time in seconds
}

/** Distribution of queries across different categories */
export interface CategoryDistribution {
  small_talk: number;         // General conversation queries
  technical_support: number;  // Technical assistance queries
  sales_inquiries: number;    // Sales-related queries
  customer_service: number;   // Customer service queries
}

/** Time-based metrics for system response */
export interface ResponseTime {
  date?: string;             // Date for daily metrics (YYYY-MM-DD)
  week?: string;            // Week number for weekly metrics
  average_time: number;     // Average response time in seconds
}

/** User satisfaction rating data */
export interface Rating {
  rating: number;           // Rating value (1-5)
  count: number;           // Number of users giving this rating
}

/** Platform and geographical usage statistics */
export interface UsageStatistics {
  by_platform: {
    iOS: number;           // Number of iOS users
    Android: number;       // Number of Android users
    Web: number;          // Number of web platform users
  };
  by_country: {
    [key: string]: number; // Number of users per country
  };
}

/** Complete AI analytics data structure */
export interface AIData {
  insight_summary: InsightSummary;
  category_distribution: CategoryDistribution;
  response_times: {
    day_wise: ResponseTime[];
    week_wise: ResponseTime[];
  };
  user_satisfaction: {
    ratings: Rating[];
  };
  usage_statistics: UsageStatistics;
}