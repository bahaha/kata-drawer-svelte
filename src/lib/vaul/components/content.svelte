<script lang="ts">
	import cn from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { getVaulCtx } from '$lib/vaul/ctx.js';

	const { class: className, children, ...props }: SvelteHTMLElements['div'] = $props();
	const drawer = getVaulCtx();
</script>

{#if drawer.states.open}
	<div
		{...props}
		class={cn('drawer__content', className)}
		role="dialog"
		tabindex="-1"
		data-vaul-drawer-direction={drawer.states.direction}
		data-vaul-drawer=""
	>
		{@render children?.()}
	</div>
{/if}

<style>
	.drawer__content {
		--vaul-drawer--content-radius: var(--vaul-drawer--content-rounded, 1rem);
		position: fixed;
		z-index: 51;
		display: flex;
		padding: var(--vaul-drawer--content-padding, 1.5rem);
		background-color: var(--vaul-drawer--content-bg, #efefef);
	}

	.drawer__content[data-vaul-drawer-direction='bottom'] {
		flex-direction: column;
		border-top-left-radius: var(--vaul-drawer--content-radius);
		border-top-right-radius: var(--vaul-drawer--content-radius);
		height: var(--vaul-drawer--content-height, 50%);
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
