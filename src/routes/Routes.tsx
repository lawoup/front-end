import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import { authPages, publicPages } from '../lib/routes';
import NotFound from '../pages/Public/NotFound';
import { generateRoutes } from './generateRoutes';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'loading component'}>
        <Switch>
          {generateRoutes(publicPages, false)}
          <AuthLayout>
            {generateRoutes(authPages, true)}
          </AuthLayout>
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
