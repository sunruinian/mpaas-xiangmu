import Vue from 'vue'
export const counterStore = Vue.observable({
	catList: [],
	catCur: 'home',
	homeFlag: false,
	curIndex: 1,
	currentTime: 60
})


export const counterStoreMixin = {
	computed: {
		catList() {
			return counterStore.catList
		},
		catCur() {
			return counterStore.catCur
		},
		homeFlag() {
			return counterStore.homeFlag
		},
		curIndex() {
			return counterStore.curIndex
		},
		currentTime() {
			return counterStore.currentTime
		}
	},
	methods: {
		dispatch(key, val) {
			counterStore[key] = val
			// 更新后存storage
			if (key === 'catList') {
				uni.setStorageSync(key, val)
			}
		}
	}
}
