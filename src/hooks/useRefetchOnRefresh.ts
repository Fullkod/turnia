'use client';

import { useEffect, useRef } from 'react';
import { useRefreshTick } from '@/store';

/**
 * Suscribe la lista al `tick` global. Cuando `bumpRefresh()` se llama desde
 * cualquier parte (modales, deletes, settings…), las listas montadas refetchean.
 *
 * No dispara en el primer render (confía en que el hook de fetch ya hace fetch
 * al montar). Solo reacciona a cambios posteriores del tick.
 */
export function useRefetchOnRefresh(refetch: () => void | Promise<unknown>): void {
  const tick = useRefreshTick();
  const lastTickRef = useRef(tick);

  useEffect(() => {
    if (lastTickRef.current !== tick) {
      lastTickRef.current = tick;
      void refetch();
    }
  }, [tick, refetch]);
}
