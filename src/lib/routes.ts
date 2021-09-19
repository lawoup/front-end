import React from 'react';
import { RouteConfig } from '../types';

export const ROUTES = {
  index: '/',
  userDashboard: '/user/dashboard',
};

export const publicPages: RouteConfig = {
  [ROUTES.index]: React.lazy(() => import('../pages/Public/Login')),
};

export const authPages: RouteConfig = {
  [ROUTES.userDashboard]: React.lazy(() => import('../pages/User/Dashboard')),
};
