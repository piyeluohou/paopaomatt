'use client';

import { useState, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '../utils/createEmotionCache';

interface EmotionProviderProps {
  children: React.ReactNode;
}

export function EmotionProvider({ children }: EmotionProviderProps) {
  const [cache] = useState(() => createEmotionCache());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
