import React, { useRef, useState, useEffect } from 'react';
import user1 from '../../assets/images/quickTransfer/user-1.svg';
import user2 from '../../assets/images/quickTransfer/user-2.svg';
import user3 from '../../assets/images/quickTransfer/user-3.svg';
import user4 from '../../assets/images/quickTransfer/user-4.svg';
import user5 from '../../assets/images/quickTransfer/user-5.svg';
import Arrow from '../../assets/images/quickTransfer/arrow.svg';
import Send from '../../assets/images/quickTransfer/send.svg';

const QuickTransfer = () => {
  const users = [
    {
      id: 1,
      name: 'Livia Bator',
      role: 'CEO',
      image: user1,
    },
    {
      id: 2,
      name: 'Randy Press',
      role: 'Director',
      image: user2,
    },
    {
      id: 3,
      name: 'Workman',
      role: 'Designer',
      image: user3,
    },
    {
      id: 4,
      name: 'Jane Doe',
      role: 'Engineer',
      image: user4,
    },
    {
      id: 5,
      name: 'John Smith',
      role: 'Manager',
      image: user5,
    },
  ];

  const scrollContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const itemWidth = scrollContainer.current.firstChild.offsetWidth;
    scrollContainer.current.scrollLeft = currentIndex * itemWidth;
  }, [currentIndex]);

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 3; // Move 3 users at a time
      return newIndex < users.length ? newIndex : 0;
    });
  };

  const handleUserClick = (id) => {
    setSelectedUserId(id);
  };

  const handleUserKeyPress = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleUserClick(id);
    }
  };

  return (
    <div className="bg-white xl:pt-[35px] xl:pb-[35px] xl:p-6 rounded-[25px] w-full">
      <div className="flex items-center gap-[33px] mb-[30px]">
        <div
          ref={scrollContainer}
          className="flex items-center space-x-[36px] overflow-x-hidden scroll-smooth w-full"
        >
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center min-w-max cursor-pointer"
              onClick={() => handleUserClick(user.id)}
              onKeyDown={(event) => handleUserKeyPress(event, user.id)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${user.name}`}
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
          onClick={scrollRight}
          className="bg-white shadow-lg rounded-full p-[22px] max-w-[50px] max-h-[50px] focus-within:hidden"
        >
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
      <div className="flex items-center gap-[24px]">
        <p className="text-[#718EBF] text-[12px] xl:text-base text-nowrap">Write Amount</p>
        <div className="relative w-full">
          <input
            type="number"
            placeholder="Write Amount"
            className="flex-1 py-4 text-[12px] xl:text-base border-0 bg-[#EDF1F7] rounded-full focus:outline-none text-[#718EBF] w-full pl-[30px]"
            defaultValue="525.50"
          />
          <button className="bg-primary text-white text-[13px] xl:text-base px-[24px] py-[14px] rounded-full flex gap-[11px] items-center hover:bg-secondary absolute top-0 right-0 xl:h-[56px]">
            <span>Send</span>
            <img src={Send} alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
