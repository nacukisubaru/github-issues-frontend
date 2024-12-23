import { Providers } from './providers';
import { AppRouter } from './router/appRouter';
import './styles.scss';

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
