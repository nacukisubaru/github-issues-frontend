import { LogsList } from 'features/logger';
import { Dashboard } from 'widgets/dashboard';

export function Logs() {
  return (
    <Dashboard>
      <LogsList />
    </Dashboard>
  );
}
