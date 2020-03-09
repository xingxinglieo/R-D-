<template>
	<view>
		<view class="">学号:{{ sno }}</view>
		<view class="">姓名:{{ name }}</view>
		<view class="">qq:{{ qq }}</view>
		<view class="">学院:{{ faculty }}</view>
		<view class="">专业:{{ major }}</view>
		<view class="">方向:{{ direction }}</view>
		<view class="">自我介绍{{ selfIntroduction }}</view>
		<empty :loading="loading"/>
	</view>
</template>

<script>
import apis from '@/static_data/api.js';
import request from '@/request-config.js';
export default {
	data() {
		return {
			message:{
				sno: '',
				name: '',
				qq: '',
				faculty: '', //学院
				major: '', //专业
				direction: '',
				selfIntroduction: '',
			},
			loading:true
		};
	},
	created() {
		this.getMessage();
	},
	methods: {
		async getMessage() {
			if (this.$openid === '') {
				return this.$Router.replace({ name: 'regist-message-first' });
			} else {
				const { data } = await request.get(apis.login, {
					params: { openid: this.$openid }
				});
				console.log(data);
				this.$set(this,'message',data);
			}
		}
	}
};
</script>

<style></style>
