<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { getVaulCtx } from '$lib/vaul/ctx.js';

	const {
		children,
		'aria-label': label = 'Open Drawer',
		...props
	}: SvelteHTMLElements['button'] = $props();

	const drawer = getVaulCtx();
</script>

<button
	type="button"
	aria-label={label}
	aria-expanded={drawer.states.open}
	onclick={(e) => {
		drawer.methods.open();
		props.onclick?.(e);
	}}
	{...props}
>
	{@render children?.()}
</button>
