import { createApp } from 'vue'
import App from './App.vue'

// TailwindCSS
import './assets/css/tailwind.css'
import './assets/css/fonts.css'

// Vue Router 4
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from './pages/home.vue'
import Features from './pages/features/index.vue'
import FeaturesReveal from './pages/features/reveal.vue'
import FeaturesSlug from './pages/features/_slug.vue'
import FeaturesMagnetButton from './pages/features/magnet-button.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/features', name: 'Features', component: Features },
	{ path: '/features/:slug', name: 'FeaturesSlug', component: FeaturesSlug },
	{ path: '/features/reveal', name: 'FeaturesReveal', component: FeaturesReveal },
	{ path: '/features/magnet-button', name: 'FeaturesMagnetButton', component: FeaturesMagnetButton }
]

const router = createRouter({
	history: createWebHistory(),
	routes // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
