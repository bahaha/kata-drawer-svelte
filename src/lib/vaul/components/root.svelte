<script lang="ts">
	import { createDrawerStore } from '$lib/internal/vaul.svelte';
	import { setVaulCtx } from '$lib/vaul/ctx.js';
	import type { DrawerProps } from './types.js';

	const { open: defaultOpen, direction, children, ...props }: DrawerProps = $props();

	const drawer = createDrawerStore({ defaultOpen, direction });
	setVaulCtx(drawer);
</script>

<section {...props}>
	{@render children?.()}
</section>
