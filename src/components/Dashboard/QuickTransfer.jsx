import React, { useRef, useState, useEffect } from 'react';
import Arrow from '../../assets/images/quickTransfer/arrow.svg';
import Send from '../../assets/images/quickTransfer/send.svg';

const QuickTransfer = ({ data }) => {
  const scrollContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const itemWidth = scrollContainer.current.firstChild.offsetWidth;
    scrollContainer.current.scrollLeft = currentIndex * itemWidth;
  }, [currentIndex]);

  const handleScroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === 'right' ? prevIndex + 3 : prevIndex - 3;
      return newIndex >= 0 && newIndex < data.length ? newIndex : 0;
    });
  };

  const handleUserClick = (id) => {
    setSelectedUserId(id);
  };

  const handleSendClick = () => {
    setAmount('');
  };

  return (
    <div className="bg-white xl:pt-[35px] xl:pb-[35px] xl:p-6 rounded-[25px] w-full">
      <div className="flex items-center gap-[33px] mb-[30px]">
        <div
          ref={scrollContainer}
          className="flex items-center space-x-[36px] overflow-x-scroll scroll-smooth w-full hide-scrollbar"
          role="listbox"
          aria-label="User selection list"
        >
          {data.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center min-w-max cursor-pointer"
              onClick={() => handleUserClick(user.id)}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') && handleUserClick(user.id)
              }
              tabIndex={0}
              role="option"
              aria-selected={selectedUserId === user.id}
              aria-label={`${user.name} - ${user.role}`}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-[70px] h-[70px] rounded-full object-cover mb-4"
              />
              <p
                className={`m-0 text-base text-center text-gray-800 ${selectedUserId === user.id ? 'font-bold' : ''}`}
              >
                {user.name}
              </p>
              <p
                className={`m-0 text-[14px] text-center text-gray-500 ${selectedUserId === user.id ? 'font-bold' : ''}`}
              >
                {user.role}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll('right')}
          className="bg-white shadow-lg rounded-full p-[22px] max-w-[50px] max-h-[50px] focus:outline-none"
          aria-label="Scroll right"
        >
          <img src={Arrow} alt="Scroll right" />
        </button>
      </div>
      <div className="flex items-center gap-[24px]">
        <p className="text-[#718EBF] text-[12px] xl:text-base text-nowrap">
          Write Amount
        </p>
        <div className="relative w-full">
          <input
            type="number"
            placeholder="123.45"
            className="flex-1 py-4 text-[12px] xl:text-base border-0 bg-[#EDF1F7] rounded-full focus:outline-none text-[#718EBF] w-full pl-[30px]"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="bg-primary text-white text-[13px] xl:text-base px-[24px] py-[14px] rounded-full flex gap-[11px] items-center hover:bg-secondary absolute top-0 right-0 xl:h-[56px]"
            onClick={handleSendClick}
          >
            <span>Send</span>
            <img src={Send} alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
