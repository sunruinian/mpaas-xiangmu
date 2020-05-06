var html2swan = require('./html2swan-main.js');
Component({
	data: {},
	options: {
		addGlobalClass: true
	},
	properties: {
		text: {
			type: Array,
			value: null,
			observer: function(newVal, oldVal) {
				if (newVal == '') return;

				if (this.data.type == 'html' || this.data.type == 'markdown' || this.data.type == 'md') {
					var data = {
						text: this.data.text,
						type: this.data.type,
						highlight: this.data.highlight,
						linenums: this.data.linenums
					};

					if (this.data.imghost != null) {
						data.imghost = this.data.imghost;
					}
					console.log('newVal=======', newVal)
					console.log('oldVal=======', oldVal)
					console.log('text0000000======', this.data.text)
					// if(newVal) {
					//   this.data.text = oldVal.concat(newVal)
					// }
					console.log('data-----loading=====', this.data.loading)
					// this.data.loading = false
					console.log('this.data.loading==', this.data.loading)

					html2swan.html2swan(this.data.text, this, this.data.padding);
					// swan.request({
					//     url: 'http://highlight-service.csdn.net/',
					//     data: data,
					//     method: 'POST',
					//     header: {
					//         'content-type': 'application/x-www-form-urlencoded'
					//     },
					//     success: res => {
					//       html2swan.html2swan(res.data.data, this, this.data.padding);
					//     },
					//     fail:res=>{
					//       // Taro.showToast({
					//       //   'title':'请求失败'
					//       // })
					//     }
					// })
				}
			}
		},
		json: {
			type: Object,
			value: {},
			observer: function(newVal, oldVal) {
				html2swan.html2swan(this.data.json, this, this.data.padding);
			}
		},
		type: {
			type: String,
			value: 'html'
		},
		highlight: {
			type: Boolean,
			value: true,
		},
		highlightStyle: {
			type: String,
			value: 'darcula'
		},
		linenums: {
			type: Boolean,
			value: true,
		},
		padding: {
			type: Number,
			value: 5
		},
		imghost: {
			type: String,
			value: null
		},
		showLoading: {
			type: Boolean,
			value: true
		}
	},
	methods: {
		wxmlTagATap: function(e) {
			this.triggerEvent('WxmlTagATap', {
				src: e.currentTarget.dataset.src
			});
		}
	},
	attached: function() {}
})
