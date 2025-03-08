<script lang="ts">
	import { getVaulCtx } from '$lib/vaul/ctx.js';

	const { children } = $props();
	const drawer = getVaulCtx();
</script>

{#if drawer.states.open}
	<div
		class="drawer__content"
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
		--drawer--content-radius: var(--drawer--content-rounded, 1rem);
		position: fixed;
		z-index: 51;
		display: flex;
		padding: var(--drawer--content-padding, 1.5rem);
		background-color: var(--drawer--content-bg, #efefef);
	}

	.drawer__content[data-vaul-drawer-direction='bottom'] {
		flex-direction: column;
		border-top-left-radius: var(--drawer--content-radius);
		border-top-right-radius: var(--drawer--content-radius);
		height: var(--drawer--content-height, 50%);
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
