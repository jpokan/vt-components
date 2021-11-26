import { createApp } from 'vue'
import App from './App.vue'

// TailwindCSS
import './assets/css/tailwind.css'
import './assets/css/fonts.css'

// Vue Router 4
import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Default from './layouts/default.vue'
import Clean from './layouts/clean.vue'
// Pages
import Home from './pages/home.vue'
import Features from './pages/features/index.vue'
import FeaturesSlug from './pages/features/_slug.vue'
import FeaturesComponentsReveal from './pages/features/components/reveal.vue'
import FeaturesComponentsMagnetButton from './pages/features/components/magnet-button.vue'
import FeaturesLayoutsFocus from './pages/features/layouts/focus.vue'

const routes = [
	{
		path: '/',
		name: 'Default',
		component: Default,
		children: [
			{ path: '', name: 'Home', component: Home },
			{ path: '/features', name: 'Features', component: Features },
			{ path: '/features/:slug', name: 'FeaturesSlug', component: FeaturesSlug },
			{ path: '/features/components/reveal', name: 'FeaturesComponentsReveal', component: FeaturesComponentsReveal },
			{
				path: '/features/components/magnet-button',
				name: 'FeaturesComponentsMagnetButton',
				component: FeaturesComponentsMagnetButton
			}
		]
	},
	{
		path: '/features/layouts/focus',
		name: 'FeaturesLayoutsFocus',
		component: Clean,
		children: [{ path: '', component: FeaturesLayoutsFocus }]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
