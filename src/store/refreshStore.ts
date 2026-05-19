'use client';

/**
 * Señal global de "datos sucios": cualquier mutación CRUD llama `bumpRefresh()`
 * y las listas suscritas vía `useRefetchOnRefresh(refetch)` revalidan sus datos.
 *
 * Implementado con `useSyncExternalStore` (vanilla) para no añadir una nueva
 * dependencia. Equivalente al store de Zustand `{ tick, bump }` descrito en
 * `AUTO_REFRESH_PATTERN.md`.
 */

import { useSyncExternalStore } from 'react';

let tick = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): number {
  return tick;
}

function getServerSnapshot(): number {
  return 0;
}

export function useRefreshTick(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function bumpRefresh(): void {
  tick += 1;
  listeners.forEach((l) => l());
}
