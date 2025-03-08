import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import BasicDrawerFixture from './fixtures/basic-drawer.svelte';

describe('Vaul Drawer: Basic', () => {
    it('render closed drawer correctly', ({ expect }) => {
        const { container } = render(BasicDrawerFixture);
        expect(screen.getByTestId('basic-drawer--trigger')).toBeInTheDocument();
        expect(screen.queryByTestId('basic-drawer--overlay')).not.toBeInTheDocument();
        expect(screen.queryByTestId('basic-drawer--content')).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('render open drawer correctly with open props = true', ({ expect }) => {
        const { container } = render(BasicDrawerFixture, {
            props: {
                root: {
                    open: true
                }
            }
        });
        expect(screen.queryByTestId('basic-drawer--overlay')).toBeInTheDocument();
        expect(screen.queryByTestId('basic-drawer--content')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('render with custom styles', ({ expect }) => {
        const { container } = render(BasicDrawerFixture, {
            props: {
                root: {
                    style: '--drawer--content-bg: #f1ebdd; --drawer--content-rounded: 2rem;',
                    open: true
                }
            }
        });
        expect(container).toMatchSnapshot();
    });

    it('render with different direction', ({ expect }) => {
        const { container } = render(BasicDrawerFixture, {
            props: {
                root: {
                    open: true,
                    direction: 'top'
                }
            }
        });

        expect(screen.getByRole('dialog')).toHaveAttribute('data-vaul-drawer-direction', 'top');
        expect(container).toMatchSnapshot();
    });

    it('opens and closes correctly', async ({ expect }) => {
        render(BasicDrawerFixture);

        expect(screen.queryByTestId('basic-drawer--content')).not.toBeInTheDocument();

        await fireEvent.click(screen.getByTestId('basic-drawer--trigger'));

        expect(screen.getByTestId('basic-drawer--overlay')).toBeInTheDocument();
        expect(screen.getByTestId('basic-drawer--content')).toBeInTheDocument();

        await fireEvent.click(screen.getByTestId('basic-drawer--overlay'));

        expect(screen.queryByTestId('basic-drawer--content')).not.toBeInTheDocument();
    });
});
