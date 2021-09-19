import { Suspense } from 'react';
import { Switch } from 'react-router-dom';

const AuthLayout: React.FC = ({ children }) => (
  <div className="auth">
    <Suspense fallback={'loading component'}>
      <Switch>{children}</Switch>
    </Suspense>
  </div>
);

export default AuthLayout;
