<script lang="ts">
	import { getVaulCtx } from '$lib/vaul/ctx.js';

	const drawer = getVaulCtx();

	function handleBackdropClick() {
		drawer.methods.close();
	}
</script>

{drawer.states.open}
{#if drawer.states.open}
	<div
		class="drawer__overlay"
		aria-hidden="true"
		data-state={drawer.states.open ? 'open' : 'closed'}
		onclick={handleBackdropClick}
	></div>
{/if}

<style>
	.drawer__overlay {
		position: fixed;
		inset: 0;
		background-color: var(--vaul--overlay-bg, rgba(0, 0, 0, 0.5));
		z-index: 50;
	}
</style>
