import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatistics = () => {
  const chartData = {
    labels: ['Bill Expense', 'Others', 'Investment', 'Entertainment'],
    datasets: [
      {
        data: [25, 20, 20, 35],
        backgroundColor: ['#FC7900', '#232323', '#396AFF', '#343C6A'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`;
        },
        color: '#FFFFFF',
        font: {
          size: 14,
        },
        textAlign: 'center',
      },
    },
  };

  return (
    <div className="bg-white lg:p-6 rounded-2xl min-h-[300px] lg:min-h-[322px]">
      <Pie data={chartData} options={chartOptions} className="max-w-full" />
    </div>
  );
};

export default ExpenseStatistics;
