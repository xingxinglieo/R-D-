<template>
	<view>
		<cu-custom bgColor="var(--blue)" isBack>
			<block slot="content"><text class=" text-lg">资料</text></block>
		</cu-custom>
		<view class="hg border-bottom bg-white px-3" v-for="(item,key) in CN" :key="key">
			{{ item }}:{{ message[key] }}
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
			CN:{
				sno:'学号',
				name:'姓名',
				qq:'qq',
				faculty:'学院',
				major:'专业',
				direction:'方向',
				selfIntroduction:'自我介绍'
			},
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
