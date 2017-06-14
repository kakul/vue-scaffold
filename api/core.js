const Promise = require('bluebird')

export default {
	post: function(url, headers, payload) {
		let xhr = new XMLHttpRequest()
		xhr.addEventListener('error', reject)
		xhr.addEventListener('load', resolve)
		xhr.open('POST', url, true)
		for (let header in headers) {
			xhr.sendRequestHeader(header, headers[header])
		}
		xhr.send(payload)
	},
	get: function(url, headers, payload) {
		let xhr = new XMLHttpRequest()
		xhr.addEventListener('error', reject)
		xhr.addEventListener('load', resolve)
		xhr.open('POST', url, true)
		for (let header in headers) {
			xhr.sendRequestHeader(header, headers[header])
		}
		xhr.send(payload)
	}
}