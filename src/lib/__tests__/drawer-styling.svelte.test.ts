import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';

import BasicDrawerFixture from './fixtures/basic-drawer.svelte';

describe('Drawer Styling', () => {
    it('apply CSS correctly', async () => {
        const { container } = render(BasicDrawerFixture, {
            props: {
                root: {
                    style: `
                --vaul-drawer--overlay-bg: rgba(0, 0, 0, 0.8);
                --vaul-drawer--content-padding: 1rem;
                --vaul-drawer--content-rounded: 1.25rem;
                --vaul-drawer--content-height: 70%;
                --vaul-drawer--content-bg: #055660;
                `
                }
            }
        });
        await fireEvent.click(screen.getByTestId('basic-drawer--trigger'));
        expect(container).toMatchSnapshot();
    });
});
