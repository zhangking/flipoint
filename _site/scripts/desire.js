function backtotop(){
	    var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 170);
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });
}

function getTime(){
	      var dateTime=new Date();
          var hh=dateTime.getHours();
          var mm=dateTime.getMinutes();
		  var ss=dateTime.getSeconds();
          
		  var yy=dateTime.getFullYear();
		  var MM=dateTime.getMonth()+1; 
		  var dd=dateTime.getDate();

		  var week=dateTime.getDay();


          var days=[ "日 ", "一 ", "二 ", "三 ", "四 ", "五 ", "六 ",] 

		  document.getElementById("date").value=yy+"年"+MM+"月"+dd+"日 "+"星期"+days[week] ;
		  document.getElementById("time").value=hh+"时"+mm+"分"+ss+"秒";
          document.getElementById("date").innerHTML=yy+"年"+MM+"月"+dd+"日 "+"星期"+days[week] ;
		  document.getElementById("time").innerHTML=hh+"时"+mm+"分"+ss+"秒";
		  setTimeout(getTime,1000);
	 }


imgReady = (function () {
	var list = [], intervalId = null,
             
	// 用
	tick = function () {
		var i = 0;
		for (; i < list.length; i++) {
			list[i].end ? list.splice(i--, 1) : list[i]();
		};
		!list.length && stop();
	},


	stop = function () {
		clearInterval(intervalId);
		intervalId = null;
	};

	return function (url, ready, load, error) {
		var onready, width, height, newWidth, newHeight,
			img = new Image();

 		img.src = url;
            
  		// 如果图片被缓存，则直接返回缓存数据
		if (img.complete) {
			ready.call(img);
			load && load.call(img);
			return;
		};

		width = img.width;
		height = img.height;

		// 加载错误后的事件
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};

		// 图片尺寸就绪
		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height ||
				// 如果图片已经在其他地方加载可使用面积检测
				newWidth * newHeight > 1024
			) {
				ready.call(img);
				onready.end = true;
			};
		};
		onready();

		// 完全加载完毕的事件
		img.onload = function () {
			// onload在定时器时间差范围内可能比onready快
			// 这里进行检查并保证onready优先执行
			!onready.end && onready();

			load && load.call(img);

			// IE gif动画会循环执行onload，置空onload即可
			img = img.onload = img.onerror = null;
		};

		// 加入队列中定期执行
		if (!onready.end) {
			list.push(onready);
			// 无论何时只允许出现一个定时器，减少浏览器性能损耗
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();