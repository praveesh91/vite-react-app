import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

// Import Porsche Design System Provider
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';

// Import global styles for the Porsche Design System
import '@porsche-design-system/components-react/styles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PorscheDesignSystemProvider>
        <App />
      </PorscheDesignSystemProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
