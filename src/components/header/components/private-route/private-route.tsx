import { Navigate } from 'react-router-dom';
import { PathValues } from '../../../../types/path';

type PrivateRouteProps = {
  toPath: PathValues;
  children: JSX.Element;
  isOpen: boolean;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, toPath, isOpen } = props;

  return isOpen ? children : <Navigate to={toPath} />;
}

export { PrivateRoute };
