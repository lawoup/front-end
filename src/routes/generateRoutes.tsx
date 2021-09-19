import { RouteConfig } from '../types';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export const generateRoutes = (
  config: RouteConfig,
  isProtectedRoute: boolean
): JSX.Element[] =>
  Object.keys(config).map((path) => {
    const Component = isProtectedRoute ? ProtectedRoute : PublicRoute;

    return (
      <Component
        exact
        key={path}
        path={path}
        component={config[path]}
      />
    );
  });
