import Vue from 'vue';
import Vuex from 'vuex';
import { ChangeAndStorageState } from "@/util/commonFun.js";
Vue.use(Vuex)
export const store = new Vuex.Store({ 
	state: {
		openid:'',
		message:{
			sno: '',
			name: '',
			qq: '',
			faculty: '', //学院
			major: '', //专业
			direction: '',
			selfIntroduction: '',
		},
	},
	mutations: {
		changeStateofGlobal:ChangeAndStorageState,
		changeMessage(state,playload){
			console.log(playload);
			Vue.set(state,'message',playload);
		},
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