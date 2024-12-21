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
import { fetchCardData } from '../app/services/fetchCardDetails';
import CardSkeleton from '../components/SkeletonLoaders/CardSkeleton';
import TransactionsSkeleton from '../components/SkeletonLoaders/TransactionsSkeleton';

const iconMapping = {
  cardIcon: cardIcon,
  paypalIcon: paypalIcon,
  walletIcon: walletIcon,
};

const DashboardPage = () => {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCardData();
        setCards(data.cards);
        const mappedTransactions = data.transactions.map((txn) => ({
          ...txn,
          icon: iconMapping[txn.icon], // Assuming iconMapping is defined elsewhere
        }));
        setTransactions(mappedTransactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

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
          <div className="flex gap-4 sm:gap-[20px] overflow-x-auto whitespace-nowrap touch-pan-x hide-scrollbar">
            {isLoading
              ? Array.from({ length: 2 }, (_, i) => <CardSkeleton key={i} />)
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
          ) : (
            <RecentTransactions transactions={transactions} />
          )}
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
