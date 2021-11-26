<template>
	<h1 class="font-semibold text-2xl my-5">Components</h1>
	<li><router-link class="jp-link" to="/features/components/reveal">Reveal</router-link></li>
	<li><router-link class="jp-link" to="/features/components/magnet-button">Magnet Button</router-link></li>
	<h1 class="font-semibold text-2xl my-5">Layouts</h1>
	<li><router-link class="jp-link" to="/features/layouts/focus">Focus</router-link></li>
</template>

<script></script>

<style lang="postcss" scoped>
	.jp-link {
		position: relative;
		--distance: -0.15rem;
		--thickness: 0.1rem;
	}
	.jp-link::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: var(--distance);
		border-bottom: var(--thickness) solid #d8d8d8;
	}
	.jp-link::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		clip-path: inset(0 100% 0 0);
		bottom: var(--distance);
		border-bottom: var(--thickness) solid black;
		transition: all 0.3s;
	}
	.jp-link:hover::after {
		position: absolute;
		left: 0;
		right: 0;
		clip-path: inset(0);
		bottom: var(--distance);
		border-bottom: var(--thickness) solid black;
	}
</style>
