import { ROUTES } from './Constant';
import Dashboard from '../pages/Dashboard';

export const PublicRoutes = [
  {
    path: ROUTES.DASHBOARD.URL,
    component: Dashboard,
  },
];

const RoutesList = [...PublicRoutes];

export default RoutesList;
