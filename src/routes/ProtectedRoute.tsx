import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  redirectTo?: string;
  isAllowed: boolean;
};

export const ProtectedRoute = ({ redirectTo = '/login', isAllowed }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};
