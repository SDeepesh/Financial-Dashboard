import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './../assets/images/sidebar/logo.svg';
import DashboardIcon from './../assets/images/sidebar/dashboard.svg';
import TransactionsIcon from './../assets/images/sidebar/transactions.svg';
import AccountsIcon from './../assets/images/sidebar/accounts.svg';
import InvestmentsIcon from './../assets/images/sidebar/investments.svg';
import CreditCardsIcon from './../assets/images/sidebar/creditcard.svg';
import LoansIcon from './../assets/images/sidebar/loans.svg';
import ServicesIcon from './../assets/images/sidebar/services.svg';
import PrivilegesIcon from './../assets/images/sidebar/preivileges.svg';
import SettingsIcon from './../assets/images/sidebar/settings-solid.svg';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: DashboardIcon, path: '/' },
    { name: 'Transactions', icon: TransactionsIcon, path: '/transactions' },
    { name: 'Accounts', icon: AccountsIcon, path: '/accounts' },
    { name: 'Investments', icon: InvestmentsIcon, path: '/investments' },
    { name: 'Credit Cards', icon: CreditCardsIcon, path: '/credit-cards' },
    { name: 'Loans', icon: LoansIcon, path: '/loans' },
    { name: 'Services', icon: ServicesIcon, path: '/services' },
    { name: 'My Privileges', icon: PrivilegesIcon, path: '/privileges' },
    { name: 'Setting', icon: SettingsIcon, path: '/settings' },
  ];

  return (
    <aside>
      <nav
        className={`border-r border-[#E6EFF5] h-full fixed inset-y-0 left-0 z-50 bg-white w-[250px] transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 xl:relative xl:translate-x-0`}
        role="navigation"
        aria-hidden={!isOpen}
      >
        <div
          className="h-full"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          role="presentation"
          tabIndex={-1}
        >
          <div className="text-center p-5 xl:pt-[31px] xl:pb-[34px] xl:pl-[38px] xl:pr-[45px]">
            <img className="mx-auto xl:mx-0 w-[145px] xl:w-[167px]" src={Logo} alt="site-logo" width="167" height="auto" />
          </div>
          <ul className="pt-[12px]">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`flex relative items-center pl-[38px] py-[15px] xl:py-[19px] cursor-pointer ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-[#B1B1B1]'
                }`}
              >
                {location.pathname === item.path && (
                  <div className="absolute top-1/2 left-0 h-[60px] w-[6px] bg-[#232323] rounded-r-[10px] transform -translate-y-1/2" />
                )}
                <Link to={item.path} className="flex w-full">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-5 h-5 xl:w-6 xl:h-6 mr-[26px]"
                  />
                  <span className="text-[15px] xl:text-[18px]">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
