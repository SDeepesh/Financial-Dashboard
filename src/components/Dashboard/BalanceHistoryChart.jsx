import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const BalanceHistoryChart = ({ data }) => {

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#DFE5EE',
          borderDash: [5, 5],
          drawBorder: true,
          drawOnChartArea: true,
        },
        ticks: { color: '#718EBF', font: { size: 14 } },
        borderColor: '#718EBF',
        borderWidth: 2,
        borderDash: [5, 5],
      },
      y: {
        grid: {
          color: '#DFE5EE',
          borderDash: [5, 5],
          drawBorder: true,
          drawOnChartArea: true,
        },
        ticks: { color: '#718EBF', font: { size: 13 }, stepSize: 200 },
        beginAtZero: true,
        borderColor: '#718EBF',
        borderWidth: 0.5,
        borderDash: [5, 5],
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white lg:p-6 rounded-[25px] w-full h-[287px]">
      <Line data={data} options={chartOptions} className="max-w-full" />
    </div>
  );
};

export default BalanceHistoryChart;
