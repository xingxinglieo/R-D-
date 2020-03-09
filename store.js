import Vue from 'vue';
import Vuex from 'vuex';
import { ChangeAndStorageState } from "@/util/commonFun.js";
Vue.use(Vuex)
export const store = new Vuex.Store({ 
	state: {
		openid:''
	},
	mutations: {
		changeStateofGlobal:ChangeAndStorageState,
	},
	getters: {
	}
})
const computed = {
	computed: {
		$themeColor() {
			return `#86DAFC`;
		},
		$themeFont() {
			return `color:#86DAFC`
		},

		$themeBackground() {
			return `background-color:#86DAFC`
		},
		$openid() {
			return store.state.openid;
		},
	}
}
Vue.mixin(computed);