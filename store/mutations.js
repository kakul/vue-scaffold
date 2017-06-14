import types from './mutation-types'
export const mutations = {
	[types.MUTATIION_1] (state) {
		state.prop1 = 1
	},
	[types.MUTATION_2] (state) {
		state.prop2 = 2
		state.prop1 = 1
	}
}