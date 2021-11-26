<template>
	<h1 class="font-semibold text-2xl my-5">Reveal animation using clip-path</h1>
	<p class="flex gap-1">
		Click on
		<button class="w-5 text-gray-400 hover:text-black transition-colors duration-150" @click="inView = !inView">
			<Play class="fill-current" />
		</button>
		to animate from bottom
	</p>

	<div class="my-5 mx-auto max-w-4xl">
		<div :class="{ appear: inView }" class="jp-b jp-text">
			Lorem ipsum dolor sit amet gconsectetur adipisicing elit. Minima qui possimus placeat est, recusandae rem
			consequatur, nihil inventore earum autem corrupti eum dicta voluptatem optio molestiae ab exercitationem
			reiciendis laborg.
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import Play from '/src/assets/svgs/controller-play.svg'

	const inView = ref(false)
</script>

<style scoped>
	.jp-text {
		font-size: 3rem;
	}
	.jp-b {
		clip-path: inset(100% 0 0 0);
		transition: clip-path 1s;
	}
	.appear {
		clip-path: inset(0);
	}
</style>
