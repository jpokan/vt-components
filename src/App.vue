<template>
	<Navbar class="absolute bottom-0 left-0 transform -rotate-90 origin-top-left translate-x-5" />
	<router-view />
</template>

<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import Navbar from './components/Navbar.vue'
</script>

<style></style>
