import types from './mutation-types'
const Promise = require('bluebird')

const action1 = ({commit}, data) => {
	return new Promise(function(resolve, reject) {
		commit(types.MUTATION_1)
	}) 
}

const action2 = ({commit}) => {
	return new Promise(function(resolve, reject) {
		commit(types.MUTATION_2)
	}) 
}

export default { action1, action2 }