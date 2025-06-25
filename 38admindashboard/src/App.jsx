
import './App.css'

import React from "react";
import AnalyticsCards from "./components/AnalyticsCards";
import ChartSection from "./components/ChartSection";
import DataTable from "./components/DataTable";
import { analyticsData, chartData, tableData } from "./data/dashboardData";

const App = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <AnalyticsCards data={analyticsData} />
      <ChartSection data={chartData} />
      <DataTable data={tableData} />
    </div>
  );
};

export default App;

