'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const LoginPage = dynamic(() => import('../pages/login'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const DashboardPage = dynamic(() => import('../pages/dashboard'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // 监听路径变化
    const path = window.location.pathname;
    setCurrentPath(path);
    
    // 监听 popstate 事件（浏览器前进后退）
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 根据路径渲染不同页面
  if (currentPath === '/dashboard') {
    return <DashboardPage />;
  }
  
  return <LoginPage />;
}
