<template>
	<div class="flex gap-5 my-5">
		<router-link class="nav-link" to="/">Home</router-link>
		<router-link class="nav-link" to="/features">Features</router-link>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="postcss">
	.nav-link {
		@apply hover:text-yellow-600 transition-colors duration-150;
	}
</style>
