import Request from '@/js_sdk/luch-request/request.js';
const request = new Request;
request.setConfig(config => {
	config.baseUrl = 'https://rdc.kim:888';
	return config;
})
export default request;
