<script lang="ts">
	import cn from 'clsx';
	import { getVaulCtx } from '$lib/vaul/ctx.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const { class: className, ...props }: SvelteHTMLElements['div'] = $props();
	const drawer = getVaulCtx();
</script>

{#if drawer.states.open}
	<div
		{...props}
		class={cn('drawer__overlay', className)}
		aria-hidden="true"
		data-state={drawer.states.open ? 'open' : 'closed'}
		onclick={() => drawer.methods.close()}
	></div>
{/if}

<style>
	.drawer__overlay {
		position: fixed;
		inset: 0;
		background-color: var(--vaul-drawer--overlay-bg, rgba(0, 0, 0, 0.5));
		z-index: 50;
	}
</style>
