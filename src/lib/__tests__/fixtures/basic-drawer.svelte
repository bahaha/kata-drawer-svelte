<script lang="ts">
	import type { DrawerProps } from '$lib/vaul/index.js';
	import { Root, Overlay, Trigger, Content } from '$lib/vaul/index.js';

	const { root }: { root: DrawerProps } = $props();
</script>

<div data-testid="basic-drawer--wrapper">
	<Root data-testid="basic-drawer--root" {...root}>
		<Trigger data-testid="basic-drawer--trigger">Open Drawer</Trigger>
		<Overlay data-testid="basic-drawer--overlay" />
		<Content data-testid="basic-drawer--content">
			<h2 data-testid="basic-drawer--content-title">Drawer Content</h2>
			<p>This is inside the drawer</p>
		</Content>
	</Root>
</div>
