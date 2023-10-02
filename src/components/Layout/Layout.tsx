import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import css from './Layout.module.css';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <section>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};
