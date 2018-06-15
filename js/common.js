// 通用JS
$(function(){
	//左侧菜单
	// 点击一级菜单
	$(".firChild").click(function(){
		if ($(".sideLeft").attr("data-flag")==1) {
			// 所有三级菜单关闭
			$(".thirMenu").hide();
			// 改变on样式
			$(".firMenu").removeClass("on");
			// 移除cur样式 now样式
			$(".secChild").removeClass("cur");
			$(".thirMenu a").removeClass("now");
			$(this).parent().addClass("on");
			// 控制显示与隐藏
			$(".secMenu").hide();
			$(this).next(".secMenu").slideDown();
		};
	});
	// 点击二级菜单
	$(".secChild").click(function(){
		// 改变cur样式
		$(".secChild").removeClass("cur");
		$(this).addClass("cur");
		// 控制显示与隐藏
		$(".thirMenu").hide();
		$(this).next(".thirMenu").slideDown();
	});
	// 点击三级菜单
	$(".thirMenu a").click(function(){
		// 改变now样式
		$(".thirMenu a").removeClass("now");
		$(this).addClass("now");
	});
	// 左侧菜单滑动
	$(".showMenu").click(function(){
		var father = $(this).parent();
		if (father.attr("data-flag")==0) {
			$(".sideLeft").animate({width:"200px"},500);
			$(".main").animate({marginLeft:"200px"},500);
			father.attr("data-flag",1);
		}else{
			$(".sideLeft").animate({width:"55px"},200);
			$(".main").animate({marginLeft:"55px"},200);
			father.attr("data-flag",0);
			// 所有三级菜单关闭
			$(".thirMenu,.secMenu").hide();
			// 改变on样式
			$(".firMenu").removeClass("on");
			// 移除cur样式 now样式
			$(".secChild").removeClass("cur");
			$(".thirMenu a").removeClass("now");
		}	
	});

	//首页正文 高度 适配 不同分辨率 显示屏 
    var lookHeight = window.screen.availHeight;
    var matterHeight = parseInt(document.body.clientHeight)-80+'px';
    $(".main").css("minHeight",matterHeight);
});