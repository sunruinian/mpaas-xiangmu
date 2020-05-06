var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
	success: function (res) {
		realWindowWidth = res.windowWidth
		realWindowHeight = res.windowHeight
	}
})
/**
 * 主函数入口区
 **/
function html2swan(data, target, imagePadding) {
  console.log(data,"data===========")
	var that = target,
		images = [];

	if (that.data.images != undefined) {
		images = that.data.images;
	}

	data = { nodes: data, images: images };
	data.view = {};
	data.view.imagePadding = 0;
	if (typeof (imagePadding) != 'undefined') {
		data.view.imagePadding = imagePadding
	}

	that.setData(data);

	that.wxmlImgLoad = wxmlImgLoad;
	that.wxmlImgTap = wxmlImgTap;
}
// 图片点击事件
function wxmlImgTap(e) {
	var that = this;
	var nowImgUrl = e.target.dataset.src;

	var imageUrls = that.data.imageUrls,
		newImageUrls = [];
	for (var i in imageUrls) {
		if (imageUrls[i] !== undefined) {
			newImageUrls.push(imageUrls[i]);
		}
	}
	if (newImageUrls.length > 0) {
		uni.previewImage({
			current: nowImgUrl,
			urls: newImageUrls
		})
	}
}

/**
 * 图片视觉宽高计算函数区
 **/
function wxmlImgLoad(e) {
	var that = this,
		idx = e.target.dataset.idx;

	calMoreImageInfo(e, idx, that);
}
// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that) {

	//因为无法获取view宽度 需要自定义padding进行计算
	var recal = wxAutoImageCal(e.detail.width, e.detail.height, that);
	that.setData({
		['images[' + idx + ']']: { width: recal.imageWidth, height: recal.imageHeight },
		['imageUrls[' + idx + ']']: e.currentTarget.dataset.src
	})
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that) {

	// 获取图片的原始长宽
	var windowWidth = 0, windowHeight = 0;
	var autoWidth = 0, autoHeight = 0;
	var results = {};
	var padding = that.data.view.imagePadding;
	windowWidth = realWindowWidth - 2 * padding;
	windowHeight = realWindowHeight;

	// 判断按照那种方式进行缩放
	// 在图片width大于手机屏幕width时候
	if (originalWidth > windowWidth) {
		autoWidth = windowWidth;
		autoHeight = (autoWidth * originalHeight) / originalWidth;
		results.imageWidth = autoWidth;
		results.imageHeight = autoHeight;
	}
	// 否则展示原来的数据
	else {
		results.imageWidth = originalWidth;
		results.imageHeight = originalHeight;
	}
	return results;
}

module.exports = {
	html2swan: html2swan
}
