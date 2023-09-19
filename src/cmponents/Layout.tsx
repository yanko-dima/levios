import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main style={{ padding: 25 }}>
      <section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};
