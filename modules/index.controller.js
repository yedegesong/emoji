;
(function(window, $) {
	var __ = {
		replyerDom: $("#replyer")
	};
	__.submitBtn = function() {
		$(".submit").on("click", function() {
			alert($("#textContent").val())
		})
	};
	__.indexInit = function() {
		//引入表情模块
		emoji.emojiInit();
		__.submitBtn()
	};
	__.indexInit();
})(window, Zepto)