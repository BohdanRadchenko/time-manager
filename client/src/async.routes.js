import {lazy} from 'react';

export const AsyncDashboard = lazy(() =>
  import('./pages/DashboardPage'),
);

export const AsyncLogin = lazy(() =>
  import('./pages/LoginPage'),
);

export const AsyncRegister = lazy(() =>
  import('./pages/RegisterPage'),
);

