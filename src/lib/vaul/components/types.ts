import type { SvelteHTMLElements } from 'svelte/elements';

import type { DrawerDirection } from '$lib/internal/types.js';

export type DrawerProps = {
    /**
     * The open state of the Drawer. You can bind to this value
     * to programatically open/close the Drawer.
     *
     * @default false
     */
    open?: boolean;

    /**
     * The direction from which the drawer should open.
     *
     * @default 'bottom'
     *
     */
    direction?: DrawerDirection;
} & SvelteHTMLElements['section'];
