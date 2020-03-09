<template>
	<!-- <view class="bg-darkbule h-100"> -->
	<view class="message-first">
		<cu-custom bgColor="var(--blue)" :isBack="false">
			<block slot="content"><text class=" text-lg">填写报名信息</text></block>
		</cu-custom>
		<view class="mt-5 flex-row a-center j-center">
			<image class="icon mr-2" src="/static/planet-2.png" />
			<text class="font-cute head-title">研发中心欢迎你</text>
		</view>
		<view class="flex-column a-center">
			<view class="form">
				<xing-input
					v-model="info['学号'].value" 
					maxlength="10"
					tip="学号"
					lineColor="var(--blue)"
					textColor="var(--blue)"
				/>
				<xing-input
					v-model="info['名字'].value" 
					maxlength="10"
					tip="名字"
					lineColor="var(--blue)"
					textColor="var(--blue)"
				/>
				<xing-input
					v-model="info['qq'].value" 
					maxlength="11"
					tip="qq"
					lineColor="var(--blue)"
					textColor="var(--blue)"
				/>
				<picker @columnchange="pickFacultyMajor" mode="multiSelector" :value="facultyMajor" :range="range">
					<view class="position-relative">
						<xing-input :disable="true" v-model="facultyMajorString" tip="学院和专业" lineColor="var(--blue)" textColor="var(--blue)" />
						<text class="cuIcon-usefullfill position-absolute down-arrow" />
					</view>
				</picker>
				<picker @change="pickDirection" :value="directionIndex" :range="directionRange">
					<view class="position-relative">
						<xing-input :disable="true" v-model="directionRange[directionIndex]" tip="方向" lineColor="var(--blue)" textColor="var(--blue)" />
						<text class="cuIcon-usefullfill position-absolute down-arrow" />
					</view>
				</picker>
				<view style="color: var(--blue);line-height: 32px;">性别</view>
				<view class="flex-row a-center">
					<xing-radio :checked="sex" @check="checkSex(true)" />
					<text>男生</text>
					<xing-radio :checked="!sex" @check="checkSex(false)" />
					<text>女生</text>
				</view>
				<view style="color: var(--blue);line-height: 32px;">自我介绍 {{ introduction.length }}/120</view>
				<textarea v-model="introduction" class="w-1" maxlength="120" placeholder="计算机相关的经验,方向进度,成绩,兴趣,爱好,等等" />
			</view>
		</view>
		<button type="primary" @click="submit">提交</button>
		<tip ref="tip" />
	</view>
</template>
<style scoped lang="scss">
.message-first {
	$icon: 50px;
	.head-title {
		font-size: 30px;
	}
	.icon {
		height: $icon;
		width: $icon;
	}
	.form {
		width: 680rpx;
		.down-arrow {
			right: 5px;
			bottom: 8px;
			color: #6aa8dc;
		}
	}
}
</style>
<script>
import validator from 'validator';
import facultyMajorMessage from '@/static_data/faculty-major.js';
import api from '@/static_data/api.js';
import request from '@/request-config.js'; 
import xingButton from '@/components/watch-button.vue';
import xingInput from '@/components/watch-input.vue';
import ErrorTip from '@/components/form-error-tip.vue';
const faculty = Object.keys(facultyMajorMessage);
class Rule {
	constructor(fun, options = {}) {
		this['function'] = fun;
		this['options'] = options;
	}
}
class Input {
	constructor(rules, type, message) {
		this.rules = rules;
		this.type = type;
		this.value = '';
		this.message = message;
	}
}
export default {
	components: {
		xingButton,
		xingInput
	},
	data() {
		return {
			info: {
				学号: new Input([new Rule('isLength', { min: 10, max: 10 }), new Rule('isInt')], 'number', '学号为10位数字'),
				名字: new Input([new Rule('isLength', { min: 2, max: 10 })], 'text', '名字为2-10个字符'),
				qq: new Input([new Rule('isLength', { min: 2, max: 11 }), new Rule('isInt')], 'number', 'qq为5到11个数字')
			},
			facultyMajor: [0, 0],
			range: [faculty, facultyMajorMessage[faculty[0]]],
			sex: true,
			directionIndex: 0,
			directionRange: ['前端', '后台', '大数据', '安卓'],
			introduction: ''
		};
	},
	computed: {
		facultyMajorString() {
			return this.range[0][this.facultyMajor[0]] + this.range[1][this.facultyMajor[1]];
		}
		// introductionLength(){
		// 	return this.introduction.length;
		// }
	},
	//		created() {
	//		},
	//		mounted() {
	//		},
	//		beforeDestroy(){
	//		},
	methods: {
		async submit() {
			console.log(this.alias());
			if (this.validatorMessage().length !== 0) return false;
			else {
				const result = await request.post(api.commit,this.alias())
				console.log(result);
			}
		},
		alias() {
			return {
				openid: this.$store.state.openid,
				sno: this.info['学号'].value,
				name: this.info['名字'].value,
				qq: this.info['qq'].value,
				sex: this.sex,
				faculty: this.range[0][this.facultyMajor[0]],
				major: this.range[1][this.facultyMajor[1]],
				direction: this.directionRange[this.directionIndex],
				selfIntroduction: this.introduction
			};
		},
		validatorMessage() {
			const result = [];
			for(let key in this.info ){ 
				const { value, rules, message } = this.info[key];
				const r = rules.every(rule => validator[rule.function](value, rule.options));
				if (!r) result.push(message);
			};
			if (result.length !== 0) this.$refs['tip'].show(result[0]);
			return result;
		},
		pickFacultyMajor(e) {
			const { column, value } = e.detail;
			if (column === 0 && column !== this.facultyMajor[0]) {
				this.facultyMajor[1] = 0;
				this.range[1] = facultyMajorMessage[faculty[value]];
			}
			this.facultyMajor[column] = value;
		},
		checkSex(e) {
			this.sex = e;
		},
		pickDirection(e) {
			this.directionIndex = e.detail.value;
		}
	}
	//		watch:{
	//		},
};
</script>
