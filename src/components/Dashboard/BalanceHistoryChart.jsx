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

const BalanceHistoryChart = () => {
  const chartData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance',
        data: [200, 400, 350, 700, 450, 600, 750],
        borderColor: '#1814F3',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
        tension: 0.5,
        borderWidth: 3,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#DFE5EE',
          borderDash: [5, 5],
          drawBorder: true,
          drawOnChartArea: true, // Do not draw grid lines on the chart area
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
          drawOnChartArea: true, // Do not draw grid lines on the chart area
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
    <div className="bg-white lg:p-6 rounded-[25px] w-full h-[276px]">
      <Line data={chartData} options={chartOptions} className="max-w-full" />
    </div>
  );
};

export default BalanceHistoryChart;
