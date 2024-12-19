import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const WeeklyActivityChart = () => {
  const chartData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        backgroundColor: '#232323',
        data: [500, 200, 300, 450, 100, 300, 400],
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        borderRadius: 30,
        borderSkipped: false,
      },
      {
        label: 'Withdraw',
        backgroundColor: '#396AFF',
        data: [400, 350, 350, 500, 150, 350, 350],
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        borderRadius: 30,
        borderSkipped: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          color: '#718EBF',
          font: {
            size: 15,
            weight: '500',
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#718EBF',
          font: { size: 13, weight: '500' },
          padding: 16,
        },
        border: { display: false },
      },
      y: {
        grid: {
          display: true,
          color: '#F3F3F5',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#718EBF',
          font: { size: 13, weight: '500' },
          stepSize: 100,
          padding: 0,
        },
        border: { display: false },
      },
    },
    layout: {
      padding: 0,
    },
  };

  return (
    <div className="bg-white lg:p-6 pb-5 rounded-2xl min-h-[300px] lg:min-h-[322px]">
      <Bar data={chartData} options={chartOptions} className="max-w-full" />
    </div>
  );
};

export default WeeklyActivityChart;
