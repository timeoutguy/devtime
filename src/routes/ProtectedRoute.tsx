import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

type ProtectedRouteProps = {
  redirectTo?: string;
};

export const ProtectedRoute = ({ redirectTo = '/login' }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};
