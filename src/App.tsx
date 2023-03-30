import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import Path from './components/pages/Path';
import Definition from './components/pages/Definition';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Dashboard />}
            />
            <Route
              path='/path/:operationId'
              element={<Path />}
            />
            <Route
              path='/definition/:type'
              element={<Definition />}
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
