import core from '/.core'
const base = 'localhost:3001'

export default {
	apiAction1: function (data) {
		var headers = {
			//standard headers go here
		}
		return core.post(base + '/route1', headers, data)
	}
}