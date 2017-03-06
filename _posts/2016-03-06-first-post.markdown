---
layout: post
title: js时钟
tags: javascript
comment: true
image: /images/logo.jpg
published: true
date: 2016-03-06
---
<!-- ![](/images/logo.jpg) -->
js时钟代码

	<!DOCTYPE HTML>
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>js时钟代码</title>
	<script>
	window.onload = function () {
		var oBody = document.body;
	//时钟定时器		
		setInterval( fnTime, 1000 );
	//初始化时间		
		fnTime ();	
	//获取时间函数	
		function fnTime () {
			//时间对象	
			var myTime = new Date();
			//获取年份			
			var iYear = myTime.getFullYear();
			//获取月份
			var iMonth = myTime.getMonth()+1;
			//获取日期
			var iDate = myTime.getDate();
			//获取星期日期
			var iWeek = myTime.getDay();
			//获取时
			var iHours = myTime.getHours();
			//获取分
			var iMin = myTime.getMinutes();
			//获取秒
			var iSec = myTime.getSeconds();
			var str = '';
			
			if( iWeek === 0 ) iWeek = '星期日';
			if( iWeek === 1 ) iWeek = '星期一';
			if( iWeek === 2 ) iWeek = '星期二';
			if( iWeek === 3 ) iWeek = '星期三';
			if( iWeek === 4 ) iWeek = '星期四';
			if( iWeek === 5 ) iWeek = '星期五';
			if( iWeek === 6 ) iWeek = '星期六';
			
			str = iYear+ '年' +iMonth+'月'+iDate+'日 '+iWeek+' '+ toTwo(iHours)+' : '+ toTwo(iMin)+' : '+ toTwo(iSec);
			
			oBody.innerHTML = str;
		
		}
	};
	//格式化函数
	function toTwo ( n ) {
		return n < 10 ?  '0' + n : '' + n;
	}
	</script>
	</head>
	<body style="font-size:60px;">
	</body>
	</html>

