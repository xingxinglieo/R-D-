<template>
	<view>
		<view class="">学号:{{ message.sno }}</view>
		<view class="">姓名:{{ message.name }}</view>
		<view class="">qq:{{ message.qq }}</view>
		<view class="">学院:{{ message.faculty }}</view>
		<view class="">专业:{{ message.major }}</view>
		<view class="">方向:{{ message.direction }}</view>
		<view class="">自我介绍{{ message.selfIntroduction }}</view>
		<!-- <empty :loading="loading"/> -->
	</view>
</template>

<script>
import apis from '@/static_data/api.js';
import request from '@/request-config.js';
export default {
	data() {
		return {
		};
	},
	computed:{
		message(){
			return this.$store.state.message
		}
	},
	created() {
		this.getMessage();
	},
	methods: {
	}
};
</script>

<style></style>
