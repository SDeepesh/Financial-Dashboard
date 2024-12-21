import React, { useState, useEffect } from 'react';
import Card from '../components/Dashboard/Card';
import RecentTransactions from '../components/Dashboard/RecentTransaction';
import WeeklyActivityChart from '../components/Dashboard/WeeklyActivityChart';
import ExpenseStatistics from '../components/Dashboard/ExpenseStatistics';
import QuickTransfer from '../components/Dashboard/QuickTransfer';
import BalanceHistoryChart from '../components/Dashboard/BalanceHistoryChart';
import cardIcon from './../assets/images/recentTransactions/card.svg';
import paypalIcon from './../assets/images/recentTransactions/paypal.svg';
import walletIcon from './../assets/images/recentTransactions/wallet.svg';
import {
  fetchCardData,
  fetchChartData,
  fetchFrequentTransfers,
} from '../app/services/apiService';
import CardSkeleton from '../components/SkeletonLoaders/CardSkeleton';
import TransactionsSkeleton from '../components/SkeletonLoaders/TransactionsSkeleton';
import WeeklyActivitySkeleton from '../components/SkeletonLoaders/WeeklyActivitySkeleton';
import ExpenseStatisticsSkeleton from '../components/SkeletonLoaders/ExpenseStatisticsSkeleton';
import BalanceHistorySkeleton from '../components/SkeletonLoaders/BalanceHistorySkeleton';
import QuickTransferSkeleton from '../components/SkeletonLoaders/QuickTransferSkeleton';
import user5 from './../assets/images/quickTransfer/user-1.svg';
import user2 from './../assets/images/quickTransfer/user-2.svg';
import user3 from './../assets/images/quickTransfer/user-3.svg';
import user4 from './../assets/images/quickTransfer/user-4.svg';
import user1 from './../assets/images/quickTransfer/user-5.svg';

const iconMapping = {
  cardIcon: cardIcon,
  paypalIcon: paypalIcon,
  walletIcon: walletIcon,
};

const userImage = {
  user1: user5,
  user2: user2,
  user3: user3,
  user4: user4,
  user5: user1,
};

const DashboardPage = () => {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [weeklyActivityData, setWeeklyActivityData] = useState(null);
  const [expenseStatisticsData, setExpenseStatisticsData] = useState(null);
  const [balanceHistoryData, setBalanceHistoryData] = useState(null);
  const [quickTransferData, setQuickTransferData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const cardData = await fetchCardData();
        const chartData = await fetchChartData();
        const quickTransfer = await fetchFrequentTransfers();
        const mappedTransactions = cardData.transactions.map((txn) => ({
          ...txn,
          icon: iconMapping[txn.icon],
        }));
        const mappedTransfers = quickTransfer.users.map((transfer) => ({
          ...transfer,
          image: userImage[transfer.image],
        }));

        setCards(cardData.cards);
        setTransactions(mappedTransactions);
        setWeeklyActivityData(chartData.weeklyActivity);
        setExpenseStatisticsData(chartData.expenseStatistics);
        setBalanceHistoryData(chartData.balanceHistory);
        setQuickTransferData(mappedTransfers);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap gap-6 lg:flex-nowrap pb-6 lg:pb-0">
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between items-start">
            <h2 className="text-base md:text-h2 font-semibold mb-[20px]">
              My Cards
            </h2>
            <button
              type="button"
              className="text-[14px] sm:text-[17px] font-semibold text-secondary cursor-pointer hover:underline"
              aria-label="See All Cards"
            >
              See All
            </button>
          </div>
          <div
            className={`flex gap-4 sm:gap-[20px] ${cards.length > 0 ? 'overflow-x-auto' : ''} whitespace-nowrap touch-pan-x hide-scrollbar`}
          >
            {isLoading
              ? Array.from({ length: 2 }).map((_, i) => (
                  <CardSkeleton key={`card-skeleton-${i}`} />
                ))
              : cards.map((card) => (
                  <Card
                    key={card.id}
                    balance={card.balance}
                    cardHolder={card.cardHolder}
                    cardNumber={card.cardNumber}
                    expiry={card.expiry}
                    theme={card.theme}
                  />
                ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="text-base md:text-h2 font-semibold mb-[22px]">
            Recent Transactions
          </h2>
          {isLoading ? (
            <TransactionsSkeleton />
          ) : transactions.length > 0 ? (
            <RecentTransactions transactions={transactions} />
          ) : (
            <p>No transactions available.</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-6 lg:flex-nowrap pb-6 lg:pb-0">
        <div className="w-full lg:w-2/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Weekly Activity
          </h2>
          {isLoading ? (
            <WeeklyActivitySkeleton />
          ) : weeklyActivityData ? (
            <WeeklyActivityChart data={weeklyActivityData} />
          ) : (
            <p>No activity data available.</p>
          )}
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Expense Statistics
          </h2>
          {isLoading ? (
            <ExpenseStatisticsSkeleton />
          ) : expenseStatisticsData ? (
            <ExpenseStatistics data={expenseStatisticsData} />
          ) : (
            <p>No statistics available.</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 lg:flex-nowrap pb-6 lg:pb-0">
        <div className="w-full lg:w-1/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Quick Transfer
          </h2>
          {isLoading ? (
            <QuickTransferSkeleton />
          ) : quickTransferData ? (
            <QuickTransfer data={quickTransferData} />
          ) : (
            <p>No quick transfer data available.</p>
          )}
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-base md:text-h2 font-semibold mb-[12px] lg:mb-[20px]">
            Balance History
          </h2>
          {isLoading ? (
            <BalanceHistorySkeleton />
          ) : balanceHistoryData ? (
            <BalanceHistoryChart data={balanceHistoryData} />
          ) : (
            <p>No balance history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
