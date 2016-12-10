$(window).load(function() {
	//页面切换
	$(".left-nav .click-btn").on('click', function() {
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$(".right-product").eq(_index).addClass('active').siblings().removeClass('active');
		})
		//page2
		//添加
		/*//添加的图片本地上传
	function previewImage1(file) {
		var MAXWIDTH = 300;
		var MAXHEIGHT = 500;
		var div1 = document.getElementById('preview1');
		if(file.files && file.files[0]) {
			div1.innerHTML = '<img id=imghead1>';
			var img = document.getElementById('imghead1');
			img.onload = function() {
				var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
				img.width = rect.width;
				img.height = rect.height;
				//                 img.style.marginLeft = rect.left+'px';
				img.style.marginTop = 10 + 'px';
			}
			var reader = new FileReader();
			reader.onload = function(evt) {
				img.src = evt.target.result;
			}
			reader.readAsDataURL(file.files[0]);
		} else //兼容IE
		{
			var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
			file.select();
			var src = document.selection.createRange().text;
			div.innerHTML = '<img id=imghead1>';
			var img = document.getElementById('imghead1');
			img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
			div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + 10 + "px;" + sFilter + src + "\"'></div>";
		}
	}

	function clacImgZoomParam(maxWidth, maxHeight, width, height) {
		var param = {
			top: 0,
			left: 0,
			width: width,
			height: height
		};
		if(width > maxWidth || height > maxHeight) {
			rateWidth = width / maxWidth;
			rateHeight = height / maxHeight;

			if(rateWidth > rateHeight) {
				param.width = maxWidth;
				param.height = Math.round(height / rateWidth);
			} else {
				param.width = Math.round(width / rateHeight);
				param.height = maxHeight;
			}
		}

		param.left = Math.round((maxWidth - param.width) / 2);
		param.top = Math.round((maxHeight - param.height) / 2);
		return param;
	}*/
	$('#tianjia').click(function() {
		$(this).attr({
			'data-toggle': 'modal',
			'data-target': '#xiugaiModal'
		})
		$(".bb").append("<tr><th><input type='checkbox'><span></span></th><td></td><td></td><td></td><td><img height='50px' width='50px'></td><td></td><td></td><td></td><td class='text-center'><button class='btn btn-default' onclick='xiugai(this)'><span class='glyphicon glyphicon-edit'></span>修改</button><button class='btn btn-danger shan' onclick='del(this)'><span class='glyphicon glyphicon-trash'></span>删除</button></td></tr>")
		$(".save-tianjia").click(function() {
			var len = $("#xiugaiModal .modal-body input").length;
			for(var j = 0; j < len; j++) {
				var id_text = $("#xiugaiModal .modal-body input").eq(0).val()
				var pic = $("#xiugaiModal .modal-body #preview1 img").attr('src')
				var tabel_text = $("#xiugaiModal .modal-body input").eq(j).val()
				if(j == 0) {
					$('.bb tr:last-child').children().eq(0).children().eq(1).text(id_text);
				} else if(j == 4) {
					$('.bb tr:last-child').children().eq(4).children('img').attr('src', pic)
				} else {
					$('.bb tr:last-child').children().eq(j).text(tabel_text);
				}
			}

			$('.bb tr:last-child').children().eq(len).text(show());

			function show() {
				var mydate = new Date();
				var str = "" + mydate.getFullYear() + "-";
				str += (mydate.getMonth() + 1) + "-";
				str += mydate.getDate();
				return str;
			}
			$('#tianjia').removeAttr('data-toggle')
		})
		$(".quxiao-tianjia").click(function() {
			$('.bb tr:last-child').remove()
		})
	})

	//修改
	//$(".xiugai").click(function(){
	//	$(this).attr({
	//		'data-toggle':'modal',
	//		'data-target':'#myModal'
	//	})
	//})

	//全选
	var door = true;
	$("#quanxuan").click(function() {
			if(door) {
				//			alert(2)
				$(".bb input[type='checkbox']").attr('checked', true);
				door = false;
			} else {
				//			alert(1)
				$(".bb input[type='checkbox']").attr('checked', false);
				door = true;
			}
		})
		//批量删除,删除被选中元素
	$("#quanshan").click(function() {
//		console.log($(".table input[type='checkbox']").length)
		var j = 0;
		if($(".table input[type='checkbox']").length == 0) {
			alert('无可删除的元素')
		} else if(choose1()) {
			$(":checked").parent().parent().remove()
		} else {
			alert('请选择要删除的元素')
		}
		function choose() {
			for(var i = 0; i < $(".bb input[type='checkbox']").length; i++) {
//				console.log($(".bb input[type='checkbox']").eq(i).get(0).checked)
				if($(".bb input[type='checkbox']").eq(i).get(0).checked) {
					j++;
				}
			}
			return j;
		}

		function choose1() {
			choose();
			if(j > 0) {
				return true;
			} else {
				return false;
			}
		}

		
	})
})