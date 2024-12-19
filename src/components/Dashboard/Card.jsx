import React from 'react';
import LightChip from '../../assets/images/cards/light_chip.svg';
import DarkChip from '../../assets/images/cards/dark_chip.svg';
import MasterCardLight from '../../assets/images/cards/mastercard-icon-light.svg';
import MasterCardDark from '../../assets/images/cards/mastercard-icon-dark.svg';
import { formatCardNumber } from './../../utils/api';

const Card = ({ balance, cardHolder, cardNumber, expiry, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const containerClasses = `w-full ${
    isDark
      ? 'bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)] text-white'
      : 'bg-white text-[#2D3748] border border-[#DFEAF2]'
  }`;

  const textClasses = (lightColor = '#718EBF') =>
    `text-[11px] lg:text-xs font-medium opacity-70 ${isDark ? '' : `text-[${lightColor}]`}`;

  const titleClasses = `text-[15px] lg:text-[20px] font-semibold ${isDark ? 'text-white' : 'text-[#2D3748]'}`;

  return (
    <div className="w-full min-w-[265px]">
      <div className={`${containerClasses} rounded-t-2xl p-[14px] lg:p-6`}>
        <div className="flex justify-between mb-4 lg:mb-6">
          <div>
            <p className={textClasses()}>Balance</p>
            <h3 className={titleClasses}>${balance}</h3>
          </div>
          <img src={isDark ? LightChip : DarkChip} alt="chip" className="w-[29px] lg:w-auto" />
        </div>

        <div className="flex gap-16 lg:mb-2">
          <div>
            <p className={textClasses()}>CARD HOLDER</p>
            <p className="text-[13px] lg:text-sm">{cardHolder}</p>
          </div>
          <div>
            <p className={textClasses()}>VALID THRU</p>
            <p className="text-[13px] lg:text-sm">{expiry}</p>
          </div>
        </div>
      </div>

      <div
        className={`${containerClasses} rounded-b-2xl flex justify-between items-center p-[14px] lg:p-[20px]`}
      >
        <h2 className={titleClasses}>
          {formatCardNumber(cardNumber)}
        </h2>
        <img
          src={isDark ? MasterCardDark : MasterCardLight}
          alt="mastercard logo"
        />
      </div>
    </div>
  );
};

export default Card;
