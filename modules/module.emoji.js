var emoji = (function(window, $) {
	//用于存储表情的键与值
	var emotionsMap = {};
	//插入表情
	$.fn.insertText = function(text) {
		this.each(function() {

			if (this.tagName !== 'INPUT' && this.tagName !== 'TEXTAREA') {
				return;
			}
			if (document.selection) {
				this.focus();
				var cr = document.selection.createRange();
				cr.text = text;
				cr.collapse();
				cr.select();
			} else if (this.selectionStart !== undefined) {
				var start = this.selectionStart;
				var end = this.selectionEnd;
				this.value = this.value.substring(0, start) + text + this.value.substring(end, this.value.length);
				this.selectionStart = this.selectionEnd = start + text.length;
			} else {
				this.value += text;
			}
		});

		return this;
	};
	//编译表情
	$.fn.parseEmotion = function() {

		// if(! categories){
		//   parsingArray = $(this);
		//   loadEmotions();
		// }else if(categories.length == 0){
		//   parsingArray = parsingArray.add($(this));
		// }else{
		$(this).each(function() {

			var $this = $(this);
			var html = $this.html();

			html = html.replace(/<.*?>/g, function($1) {
				$1 = $1.replace('[', '[');
				$1 = $1.replace(']', ']');
				return $1;
			}).replace(/\[[^\[\]]*?\]/g, function($1) {
				var url = emotionsMap[$1];
				if (url) {
					return '<i class="' + url + '"></i>';
				}
				return $1;
			});

			$this.html(html);
		});
		//}

		return this;
	};
	//默认配置
	var __ = {
		index: 0,
		boxDom: $("#faceMainBox"), //表情总模块
		emojiMenu: $("#navTabBox"), //表情菜单模块
		textDom: $("#textContent"), //文本域
		emojiBox: $("#faceMain"), //整个表情块
		emojiBtn: $("#emojiBtn") //表情按钮
	};
	//表情配置数据
	__.emojiData = function() {
		return data = [{
			face: [{
					icon: "→_→",
					class: "face_1 face icon_0"
				}, {
					icon: "[微笑]",
					class: "face_1 face icon_1"
				}, {
					icon: "[嘻嘻]",
					class: "face_1 face icon_2"
				}, {
					icon: "[哈哈]",
					class: "face_1 face icon_3"
				}, {
					icon: "[爱你]",
					class: "face_1 face icon_4"
				}, {
					icon: "[挖鼻]",
					class: "face_1 face icon_5"
				}, {
					icon: "[吃惊]",
					class: "face_1 face icon_6"
				}, {
					icon: "[晕]",
					class: "face_1 face icon_7"
				}, {
					icon: "[泪]",
					class: "face_1 face icon_8"
				}, {
					icon: "[馋嘴]",
					class: "face_1 face icon_9"
				}, {
					icon: "[抓狂]",
					class: "face_1 face icon_10"
				}, {
					icon: "[哼]",
					class: "face_1 face icon_11"
				}, {
					icon: "[可爱]",
					class: "face_1 face icon_12"
				}, {
					icon: "[怒]",
					class: "face_1 face icon_13"
				}, {
					icon: "[汗]",
					class: "face_1 face icon_14"
				}, {
					icon: "[害羞]",
					class: "face_1 face icon_15"
				}, {
					icon: "[困]",
					class: "face_1 face icon_16"
				}, {
					icon: "[钱]",
					class: "face_1 face icon_17"
				}, {
					icon: "[偷笑]",
					class: "face_1 face icon_18"
				}, {
					icon: "[笑cry]",
					class: "face_1 face icon_19"
				}, {
					icon: "[doge]",
					class: "face_1 face icon_20"
				}, {
					icon: "[喵喵]",
					class: "face_1 face icon_21"
				}, {
					icon: "[酷]",
					class: "face_1 face icon_22"
				}, {
					icon: "[衰]",
					class: "face_1 face icon_23"
				}, {
					icon: "[闭嘴]",
					class: "face_1 face icon_24"
				}, {
					icon: "[鄙视]",
					class: "face_1 face icon_25"
				}, {
					icon: "[色]",
					class: "face_1 face icon_26"
				}, {
					icon: "[鼓掌]",
					class: "face_1 face icon_27"
				}

			]
		}, {
			face: [{
					icon: "[悲伤]",
					class: "face_2 face icon_0"
				}, {
					icon: "[思考]",
					class: "face_2 face icon_1"
				}, {
					icon: "[生病]",
					class: "face_2 face icon_2"
				}, {
					icon: "[亲亲]",
					class: "face_2 face icon_3"
				}, {
					icon: "[怒骂]",
					class: "face_2 face icon_4"
				}, {
					icon: "[太开心]",
					class: "face_2 face icon_5"
				}, {
					icon: "[白眼]",
					class: "face_2 face icon_6"
				}, {
					icon: "[右哼哼]",
					class: "face_2 face icon_7"
				}, {
					icon: "[左哼哼]",
					class: "face_2 face icon_8"
				}, {
					icon: "[嘘]",
					class: "face_2 face icon_9"
				}, {
					icon: "[委屈]",
					class: "face_2 face icon_10"
				}, {
					icon: "[吐]",
					class: "face_2 face icon_11"
				}, {
					icon: "[可怜]",
					class: "face_2 face icon_12"
				}, {
					icon: "[睡]",
					class: "face_2 face icon_13"
				}, {
					icon: "[挤眼]",
					class: "face_2 face icon_14"
				}, {
					icon: "[失望]",
					class: "face_2 face icon_15"
				}, {
					icon: "[顶]",
					class: "face_2 face icon_16"
				}, {
					icon: "[疑问]",
					class: "face_1 face icon_17"
				}, {
					icon: "[困]",
					class: "face_2 face icon_18"
				}, {
					icon: "[感冒]",
					class: "face_2 face icon_19"
				}, {
					icon: "[拜拜]",
					class: "face_2 face icon_20"
				}, {
					icon: "[黑线]",
					class: "face_2 face icon_21"
				}, {
					icon: "[阴险]",
					class: "face_2 face icon_22"
				}, {
					icon: "[互粉]",
					class: "face_2 face icon_23"
				}, {
					icon: "[心]",
					class: "face_2 face icon_24"
				}, {
					icon: "[伤心]",
					class: "face_2 face icon_25"
				}, {
					icon: "[猪头]",
					class: "face_2 face icon_26"
				}, {
					icon: "[熊猫]",
					class: "face_2 face icon_27"
				}

			]
		}, {
			face: [{
					icon: "[兔子]",
					class: "face_3 face icon_0"
				}, {
					icon: "[握手]",
					class: "face_3 face icon_1"
				}, {
					icon: "[作揖]",
					class: "face_3 face icon_2"
				}, {
					icon: "[赞]",
					class: "face_3 face icon_3"
				}, {
					icon: "[耶]",
					class: "face_3 face icon_4"
				}, {
					icon: "[good]",
					class: "face_3 face icon_5"
				}, {
					icon: "[弱]",
					class: "face_3 face icon_6"
				}, {
					icon: "[NO]",
					class: "face_3 face icon_7"
				}, {
					icon: "[ok]",
					class: "face_3 face icon_8"
				}, {
					icon: "[haha]",
					class: "face_3 face icon_9"
				}, {
					icon: "[来]",
					class: "face_3 face icon_10"
				}, {
					icon: "[威武]",
					class: "face_3 face icon_11"
				}, {
					icon: "[鲜花]",
					class: "face_3 face icon_12"
				}, {
					icon: "[钟]",
					class: "face_3 face icon_13"
				}, {
					icon: "[浮云]",
					class: "face_3 face icon_14"
				}, {
					icon: "[飞机]",
					class: "face_3 face icon_15"
				}, {
					icon: "[月亮]",
					class: "face_1 face icon_16"
				}, {
					icon: "[太阳]",
					class: "face_3 face icon_17"
				}, {
					icon: "[微风]",
					class: "face_3 face icon_18"
				}, {
					icon: "[下雨]",
					class: "face_3 face icon_19"
				}, {
					icon: "[给力]",
					class: "face_3 face icon_20"
				}, {
					icon: "[神马]",
					class: "face_3 face icon_21"
				}, {
					icon: "[围观]",
					class: "face_3 face icon_22"
				}, {
					icon: "[话筒]",
					class: "face_3 face icon_23"
				}, {
					icon: "[奥特曼]",
					class: "face_3 face icon_24"
				}, {
					icon: "[草泥马]",
					class: "face_3 face icon_25"
				}, {
					icon: "[萌]",
					class: "face_3 face icon_26"
				}, {
					icon: "[囧]",
					class: "face_3 face icon_27"
				}

			]
		}, {
			face: [{
				icon: "[织]",
				class: "face_4 face icon_0"
			}, {
				icon: "[礼物]",
				class: "face_4 face icon_1"
			}, {
				icon: "[喜]",
				class: "face_4 face icon_2"
			}, {
				icon: "[围脖]",
				class: "face_4 face icon_3"
			}, {
				icon: "[音乐]",
				class: "face_4 face icon_4"
			}, {
				icon: "[绿丝带]",
				class: "face_4 face icon_5"
			}, {
				icon: "[蛋糕]",
				class: "face_4 face icon_6"
			}, {
				icon: "[蜡烛]",
				class: "face_4 face icon_7"
			}, {
				icon: "[干杯]",
				class: "face_4 face icon_8"
			}, {
				icon: "[男孩儿]",
				class: "face_4 face icon_9"
			}, {
				icon: "[女孩儿]",
				class: "face_4 face icon_10"
			}, {
				icon: "[肥皂]",
				class: "face_4 face icon_11"
			}, {
				icon: "[照相机]",
				class: "face_4 face icon_12"
			}, {
				icon: "[浪]",
				class: "face_4 face icon_13"
			}, {
				icon: "[沙尘暴]",
				class: "face_4 face icon_14"
			}]
		}]
	};
	//解析表情键与值
	__.addMap = function() {
		__.boxDom.find(".face").each(function(i) {
			emotionsMap[$(this).data("face")] = $(this).attr("class");
		});
	};
	//页面样式切换
	__.swipeChange = function(a) {
		__.boxDom.css({
			"-webkit-transform": "translate(" + ((-a) * 100) + "%, 0px) translateZ(0px)"
		});
		__.emojiMenu.find("li").eq(a).addClass("current").siblings().removeClass('current');
	};
	//滑动效果
	__.contenAddEvtn = function() {
		__.boxDom.swipe({
			swipeLeft: function(event, direction, distance, duration, fingerCount) {
				__.index++;
				if (__.index > 4 - 1) {
					__.index = 4;
					return false;
				}
				__.swipeChange(__.index)
			},
			swipeRight: function() {
				__.index--;
				if (__.index < 0) {
					__.index = 0;
					return false;
				}
				__.swipeChange(__.index)
			},
			threshold: 5
		});
	};
	//模板输出
	__.template = function(Id) {
		$.each(__.emojiData(), function(i, v) {
			$('<div id="face_' + (i + 1) + '" class="content-tab-face selfclear clearfix" >').appendTo('#faceMainBox');
			$.each(v.face, function(itm, itmVal) {
				$('<i data-face="' + itmVal.icon + '" class="' + itmVal.class + '"></i>').appendTo("#" + "face_" + (i + 1));
			});
			$("<li></li>").appendTo('#navTabBox');
		});
		__.emojiMenu.find("li").eq(0).addClass("current");
		//添加键与值
		__.addMap();
	};
	//点击插入内容
	__.addText = function() {
		__.boxDom.on("click", ".face", function() {
			__.textDom.insertText($(this).data("face"));
		});
	};

	//获得焦点关闭表情
	__.focusEvent = function() {
		__.textDom.on("focus", function() {
			if (__.emojiBox.is(':visible')) {
				__.emojiBox.hide();
			}
		})
	};
	//表情是否显示隐藏
	__.isShowEmoji = function() {
		if (!__.emojiBox.is(':visible')) {
			__.emojiBox.show();
		} else {
			__.emojiBox.hide();
		}
	};
	//主入口
	__.emojiInit = function() {
		__.template();
		__.contenAddEvtn();
		__.addText();
		//获得焦点表情隐藏
		__.focusEvent();
		//表情按钮
		__.emojiBtn.on("click", function() {
			__.isShowEmoji();
		});
		//编译事件
		$("#byBtn").on("click", function() {
			var content = __.textDom.val();
			$('#result').html(content).parseEmotion();
		})
	};
	return __;
})(window, Zepto);