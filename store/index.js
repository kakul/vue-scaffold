import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
}

export function createStore() {
	return new Vuex.Store({
		state,
		getters,
		actions,
		mutations
	})
}