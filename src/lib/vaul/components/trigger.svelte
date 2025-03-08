<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import { getVaulCtx } from '$lib/vaul/ctx.js';

	const { children, onclick, ...props }: HTMLButtonAttributes = $props();

	const drawer = getVaulCtx();
</script>

<button
	type="button"
	aria-label="Open Drawer"
	aria-expanded={drawer.states.open}
	onclick={() => drawer.methods.open()}
	{...props}
>
	{@render children?.()}
</button>
