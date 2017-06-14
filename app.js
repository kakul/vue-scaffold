import Vue from 'vue'
import App from './components/App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import './css/extra.css'

export const router = createRouter()
export const store = createStore()

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})