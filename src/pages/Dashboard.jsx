import React from 'react';
import Card from '../components/Dashboard/Card';
import RecentTransactions from '../components/Dashboard/RecentTransaction';
import WeeklyActivityChart from '../components/Dashboard/WeeklyActivityChart';
import ExpenseStatistics from '../components/Dashboard/ExpenseStatistics';
import QuickTransfer from '../components/Dashboard/QuickTransfer';
import BalanceHistoryChart from '../components/Dashboard/BalanceHistoryChart';
import cardIcon from './../assets/images/recentTransactions/card.svg';
import paypalIcon from './../assets/images/recentTransactions/paypal.svg';
import walletIcon from './../assets/images/recentTransactions/wallet.svg';

const transactions = [
  {
    description: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    icon: cardIcon,
  },
  {
    description: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    icon: paypalIcon,
  },
  {
    description: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: walletIcon,
  },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-6 lg:flex-nowrap pb-6 lg:pb-0">
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between">
            <h2 className="text-base md:text-h2 font-semibold mb-[20px]">
              My Cards
            </h2>
            <p className="text-[14px] sm:text-[17px] font-semibold text-secondary cursor-pointer hover:underline">
              See All
            </p>
          </div>
          <div className="flex gap-4 sm:gap-[20px] overflow-x-auto whitespace-nowrap touch-pan-x scrollbar-hide">
            <Card
              balance="5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778434312311234"
              expiry="12/22"
            />
            <Card
              balance="5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778434312311234"
              expiry="12/22"
              theme="light"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="text-base md:text-h2 font-semibold mb-[22px]">
            Recent Transactions
          </h2>
          <RecentTransactions transactions={transactions} />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 lg:flex-nowrap pb-6 lg:pb-0">
        <div className="w-full lg:w-2/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Weekly Activity
          </h2>
          <WeeklyActivityChart />
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Expense Statistics
          </h2>
          <ExpenseStatistics />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 lg:flex-nowrap pb-6 lg:pb-0">
        <div className="w-full lg:w-1/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Quick Transfer
          </h2>
          <QuickTransfer />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Balance History
          </h2>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
