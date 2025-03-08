<script lang="ts">
	import { getVaulCtx } from '$lib/vaul/ctx.js';

	const { children } = $props();

	const drawer = getVaulCtx();
</script>

<button type="button" onclick={() => drawer.methods.open()}>
	{@render children?.()}
</button>
