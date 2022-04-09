import React, { useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce/lib';
import { MainLayout } from 'components/layouts/MainLayout';
import { store } from 'store/store';
import { routes } from 'routes/routes';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

export const App = () => {
  const handleHeight = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  const handleResize = useDebouncedCallback(handleHeight, 100);

  useEffect(() => {
    handleHeight();

    window.addEventListener('resize', handleResize);
  }, [handleHeight, handleResize]);

  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <HashRouter>
            <MainLayout>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Routes>
            </MainLayout>
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
};
