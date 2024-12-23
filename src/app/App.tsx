
import { Providers } from './providers';
import { AppRouter } from './router/appRouter';

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
