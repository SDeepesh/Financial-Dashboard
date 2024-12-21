import { ROUTES } from './Constant';
import Dashboard from '../pages/Dashboard';
import SettingsPage from '../pages/SettingsPage';
import Accounts from '../pages/Accounts';
import CreditCards from '../pages/CreditCards';
import Investments from '../pages/Investments';
import Loans from '../pages/Loans';
import Privileges from '../pages/Privileges';
import Services from '../pages/Services';
import Transactions from '../pages/Transactions';

export const PublicRoutes = [
  {
    path: ROUTES.DASHBOARD.URL,
    component: Dashboard,
  },
  {
    path: ROUTES.SETTINGS.URL,
    component: SettingsPage,
  },
  {
    path: ROUTES.ACCOUNTS.URL,
    component: Accounts,
  },
  {
    path: ROUTES.CREDITCARDS.URL,
    component: CreditCards,
  },
  {
    path: ROUTES.INVESTMENTS.URL,
    component: Investments,
  },
  {
    path: ROUTES.PRIVILEGES.URL,
    component: Privileges,
  },
  {
    path: ROUTES.LOANS.URL,
    component: Loans,
  },
  {
    path: ROUTES.SERVICES.URL,
    component: Services,
  },
  {
    path: ROUTES.TRANSACTIONS.URL,
    component: Transactions,
  },
];

const RoutesList = [...PublicRoutes];

export default RoutesList;
