<template>
	<view class="bg-darkbule position-relative" style="min-height: 100vh;">
			<button @tap="regist" class="position-center z-index_3000 r_button" type="primary">
				进入
			</button>
		<image class="background" mode="aspectFill" src="/static/first.jpg" />
	</view>
</template>

<script>
import errorTip from '@/components/form-error-tip.vue';
import myButton from '@/components/watch-button.vue';
import xingInput from '@/components/watch-input.vue';
export default {
	components: {
		errorTip,
		myButton,
		xingInput
	},
	onLoad() {
		// #ifdef MP
		uni.showShareMenu();
		// #endif
	},
	methods: {
		regist(){
			this.$Router.push({name:'regist-message-first'})
		}
	}
};
</script>

<style scoped>
.background {
	width: 750rpx;
	height: 100vh;
}
.r_button{
	margin-top: 120px;
	width: 110px;
}
</style>
