import {lazy} from 'react';


export const AsyncHome = lazy(() =>
  import('./pages/HomePage'),
);

export const AsyncDashboard = lazy(() =>
  import('./pages/DashboardPage'),
);

export const AsyncLogin = lazy(() =>
  import('./pages/LoginPage'),
);

export const AsyncRegister = lazy(() =>
  import('./pages/RegisterPage'),
);
