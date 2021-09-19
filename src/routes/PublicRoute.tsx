import { useEffect, useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { auth } from '../lib/firebase';
import Dashboard from '../pages/User/Dashboard';

const PublicRoute = (props: RouteProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setIsAuth(!!user));
  }, []);

  return isAuth ? <Dashboard /> : <Route {...props} />;
};

export default PublicRoute;
