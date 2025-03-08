import type { DrawerDirection } from './types.js';

export type CreateDrawerStoreOptions = {
    defaultOpen?: boolean;
    direction?: DrawerDirection;
};

const defaultDrawerStoreOptions: Required<CreateDrawerStoreOptions> = {
    defaultOpen: false,
    direction: 'bottom'
};

export function createDrawerStore(options: CreateDrawerStoreOptions) {
    let _open = $state(options.defaultOpen ?? defaultDrawerStoreOptions.defaultOpen);
    let direction = $state(options.direction ?? defaultDrawerStoreOptions.direction);

    return {
        states: {
            direction,
            get open() {
                return _open;
            }
        },
        methods: {
            open: () => (_open = true),
            close: () => (_open = false)
        }
    };
}

export type DrawerStore = ReturnType<typeof createDrawerStore>;
