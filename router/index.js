import VueRouter from 'vue-router'
import Vue from 'vue'
import RouterView from '../components/RouterView.vue'
Vue.use(VueRouter)

export function createRouter() {

	return new VueRouter({
		mode: 'history',
		routes: [
			{ path: '/', component: RouterView }
		]
	}) 
}