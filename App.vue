<script>
import Vue from 'vue';
import apis from '@/static_data/api.js';
import request from '@/request-config.js';
export default {
	onLaunch() {
		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				}
				// #endif

				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = uni.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif
			}
		});
		this.getOpenId();
	},
	methods: {
		async getOpenId() {
			const [, { code }] = await uni.login();
			console.log(code);
			const { data } = await request.get(apis.getOpenId, {
				params: { code }
			});
			const { openid, session_key } = JSON.parse(data);
			this.$store.commit({
				type:'changeStateofGlobal',
				stateName:'openid',
				value: openid
			});
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@import 'css/icon.css';
@import 'css/animation.css';
@import 'css/color-ui.css';
@import 'css/main.css';
@import 'css/rd.css';
</style>
