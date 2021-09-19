import { useEffect, useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { auth } from '../lib/firebase';
import Login from '../pages/Public/Login';


const ProtectedRoute = (props: RouteProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setIsAuth(!!user));
  }, []);

  return isAuth ? <Route {...props} /> : <Login />;
};

export default ProtectedRoute;
