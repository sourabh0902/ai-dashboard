# AI Insights Dashboard

## Overview

The AI Insights Dashboard is a web application built with React, Redux, and Vite that visualizes AI analytics data. It provides insights into query performance, user satisfaction, and response times through various charts and metrics.

## Application Explanation

This application serves as a comprehensive dashboard for visualizing AI analytics data. It fetches data from a mock API and displays it in an organized manner using various charts and summary components. The dashboard includes key metrics, category distribution, response times, and user satisfaction ratings, providing a holistic view of the AI system's performance.

## Features

- **Key Metrics Summary**: Displays total queries, successful queries, failed queries, and average response time.
- **Category Distribution Chart**: Visualizes the distribution of queries across different categories.
- **Response Time Charts**: Shows daily and weekly response times.
- **User Satisfaction Chart**: Displays user satisfaction ratings.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **Vite**: A build tool that provides a fast development environment.
- **Recharts**: A composable charting library built on React components.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/ai-dashboard.git
cd AI Dashboard
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Usage

Once the application is running, you will see the AI Insights Dashboard displaying various metrics and charts based on the mock data provided. The data is fetched and displayed dynamically, simulating a real-world scenario.

## Project Structure

```markdown
AI Dashboard/
├── public/ # Static files
├── src/ # Source files
│ ├── components/ # React components
│ ├── data/ # Mock data
│ ├── store/ # Redux store and slices
│ ├── types/ # TypeScript type definitions
│ ├── App.tsx # Main application component
│ ├── index.css # Global styles
│ ├── main.tsx # Entry point
│ └── vite-env.d.ts # Vite environment types
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── vite.config.ts # Vite configuration
```

## Acknowledgments

- Thanks to the creators of React, Redux, Vite, and Recharts for their amazing tools and libraries.