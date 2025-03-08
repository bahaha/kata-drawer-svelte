import type { DrawerStore } from '$lib/internal/vaul.svelte.js';
import { getContext, setContext } from 'svelte';

const VAUL_ROOT = Symbol('VAUL_ROOT');

export function setVaulCtx(store: DrawerStore) {
    setContext(VAUL_ROOT, store);
    return store;
}

export function getVaulCtx() {
    return getContext<ReturnType<typeof setVaulCtx>>(VAUL_ROOT);
}
