<template>
	<div class="flex gap-5 text-gray-400">
		<router-link class="nav-link" to="/">Home</router-link>
		<router-link class="nav-link" to="/features">Features</router-link>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="postcss" scoped>
	.nav-link {
		@apply hover:text-black transition-colors duration-150;
	}
</style>
