<script lang="ts">
	import type { DrawerProps } from '$lib/vaul/index.js';
	import { Root, Overlay, Trigger, Content } from '$lib/vaul/index.js';

	const { root }: { root: DrawerProps } = $props();
</script>

<data data-testid="basic-drawer--wrapper">
	<Root {...root}>
		<Trigger data-testid="basic-drawer--trigger">Open Drawer</Trigger>
		<Overlay data-testid="basic-drawer--overlay" />
		<Content data-testid="basic-drawer--content">
			<h2 data-testid="basic-drawer--content-title">Drawer Content</h2>
			<p>This is insdie the drawer</p>
		</Content>
	</Root>
</data>
