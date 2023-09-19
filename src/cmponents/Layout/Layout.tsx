import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <main className={css.main}>
      <section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};
