'use client';

import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('../pages/login'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return <LoginPage />;
}
