import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// Create a client-side cache
export function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({
    key: 'css',
    insertionPoint,
    prepend: true, // Ensures styles are prepended to the head
  });
}

// Create a server-side cache
export function createEmotionServerCache() {
  return createCache({ key: 'css' });
}
