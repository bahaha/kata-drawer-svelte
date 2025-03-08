# Vaul for Svelte

A drawer component for Svelte inspired by the [Vaul](https://github.com/emilkowalski/vaul) drawer component for React. This drawer component allows you to create draggable drawer interfaces with smooth animations and gestures.

## Features

- 🚀 Simple API for creating drawer interfaces
- 🎨 Fully customizable with CSS variables
- 🧩 Modular component structure
- 📱 Mobile-friendly with touch gestures (coming soon)
- 📏 Support for snap points (coming soon)
- 🔄 Multiple opening directions

## Installation

### Basic Usage

```svelte
<script>
	import { Root, Trigger, Overlay, Content } from 'vaul-svelte';
</script>

<Root>
	<Trigger>Open Drawer</Trigger>
	<Overlay />
	<Content>
		<h2>Drawer Content</h2>
		<p>This is the drawer content.</p>
	</Content>
</Root>
```

### Components

#### Root

The main container component that sets up the drawer context.

```svelte
<Root open={boolean} direction="bottom">
	<!-- Child components go here -->
</Root>
```

#### Props

- `open`: Boolean to control the drawer state (optional)
- `direction`: Direction the drawer opens from (default: 'bottom')

### Trigger

A button that opens the drawer when clicked.

```svelte
<Trigger>Open Drawer</Trigger>
```

### Content

The actual drawer content container.

```svelte
<Content>
	<!-- Your content goes here -->
</Content>
```

### Overlay

The background overlay that appears when the drawer is open.

```svelte
<Overlay />
```

## Customization

The drawer component can be customized using CSS variables:

```svelte
<Root style="--drawer--content-bg: #f1ebdd;">
	<!-- Components -->
</Root>
```

### Available CSS Variables

| Variable                         | Description                            | Default              |
| -------------------------------- | -------------------------------------- | -------------------- |
| `--vaul-drawer--content-bg`      | Drawer background color                | `#efefef`            |
| `--vaul-drawer--content-padding` | Drawer content padding                 | `1.5rem`             |
| `--vaul-drawer--content-rounded` | Drawer corner radius                   | `1rem`               |
| `--vaul-drawer--content-height`  | Drawer height (for bottom/top drawers) | `50%`                |
| `--vaul-drawer--overlay-bg`      | Overlay background color               | `rgba(0, 0, 0, 0.5)` |

### Drawer Directions

The drawer can open from different directions:

```svelte
<!-- Bottom drawer (default) -->
<Root direction="bottom">...</Root>

<!-- Top drawer -->

<Root direction="top">...</Root>

<!-- Left drawer (coming soon) -->

<Root direction="left">...</Root>

<!-- Right drawer (coming soon) -->

<Root direction="right">...</Root>
```
