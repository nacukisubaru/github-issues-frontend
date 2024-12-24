import { Link, useRouteError } from 'react-router-dom';
import { RejectedDataType } from 'shared/types/errorTypes';

export function Fallback() {
  const error = useRouteError();
  const knownError = error as RejectedDataType;

  return (
    <div role="alert" className="fallback">
      <h1>Something went wrong</h1>
      <span>
        {knownError?.messageError}
        {knownError?.status}
      </span>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
