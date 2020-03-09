<template>
	<view>
		<cu-custom bgColor="var(--blue)" isBack>
			<block slot="content"><text class=" text-lg">我的资料</text></block>
		</cu-custom>
		<view class="px-3 bg-white border-bottom flex-row j-sb hg" v-for="(item, key) in CN" :key="key">
			<text>{{ item }}</text>
			<text>{{ message[key] }}</text>
		</view>
		<view class="px-3 bg-white hg">
			自我介绍
		</view>
		<view class="px-3 bg-white" style="min-height: 150px;">
			{{message.selfIntroduction}}
		</view>
		<!-- <empty :loading="loading"/> -->
	</view>
</template>

<script>
import apis from '@/static_data/api.js';
import request from '@/request-config.js';
export default {
	data() {
		return {
			CN: {
				sno: '学号',
				name: '姓名',
				qq: 'qq',
				faculty: '学院',
				major: '专业',
				direction: '方向',
			}
				// selfIntroduction: '自我介绍'
		};
	},
	computed: {
		message() {
			return this.$store.state.message;
		}
	},
	created() {
		this.getMessage();
	},
	methods: {}
};
</script>

<style></style>
