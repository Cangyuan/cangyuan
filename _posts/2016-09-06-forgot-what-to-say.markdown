---
layout: post
title: js执行流程
tags: javascript
comment: true
published: true
description: 
---

javascript代码执行流程

	<!DOCTYPE HTML>
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>demo</title>
	<script>
	/*
	// 作用域：
	// 域：空间、范围、区域……
	// 作用：读、写
		script		全局变量、全局函数
			自上而下
		
		函数
			由里到外
		
		{}

		浏览器：
			“JS解析器”
				1）“找一些东西”	：var  function 参数
				
								a = ...
										所有的变量，在正式运行代码之前，都提前赋了一个值：未定义
								fn1 = function fn1(){ alert(2); }
										所有的函数，在正式运行代码之前，都是整个函数块

								JS 的预解析

							遇到重名的：只留一个
								变量和函数重名了，就只留下函数
										
				2）逐行解读代码：
							表达式：= + - * / % ++ -- ! 参数……
							
							表达式可以修改预解析的值！
				



	alert(a);					// function a (){ alert(4); }
	var a = 1;
	alert(a);					// 1
	function a (){ alert(2); }
	alert(a);					// 1
	var a = 3;		
	alert(a);					// 3
	function a (){ alert(4); }
	alert(a);					// 3

	alert( typeof a );
	// a();									// 报错
	*/

	/*
	var a = 1;
	function fn1(){
		alert(a);						// undefined
		var a = 2;
	}
	fn1();
	alert(a);							// 1

	var a = 1;
	function fn1(){
		alert(a);						// 1
		a = 2;
	}
	fn1();
	alert(a);							// 2
	*/

	/*
	var a = 1;
	function fn1(a){
		alert(a);						// undefined
		a = 2;
	}
	fn1();
	alert(a);							// 1


	var a = 1;
	function fn1(a){
		alert(a);						// 1
		a = 2;
	}
	fn1(a);
	alert(a);							// 1
	*/
	</script>
	
	<script>

	/*
	var num = 0;

	function fn1(){
		num++;
	}
	function fn2(){
		num--;
	}

	fn2();
	fn1();
	fn2();
	alert(num);
	*/

	// 想要获取函数内的值：

	var str = '';
	function fn1(){
		var a = '大鸡腿~';
		str = a;
	}
	fn1();
	// alert( str );

	function fn2(){
		var a = '9999999克拉钻石23456789';
		fn3(a);
	}
	fn2();

	function fn3(a){
		alert(a);
	}

	</script>
	<script>

	// alert(a);			// ...
	alert( fn1 );		// FF 不能对下面的函数进行预解析

	var a = 1;
	function fn1(){
		alert(123);
	}

	if( true ){
		
	}


	</script>
	<script>
	window.onload = function (){
		var aBtn = document.getElementsByTagName('input');
		
		for( var i=0; i<aBtn.length; i++ ){
			aBtn[i].onclick = function (){
				
				// alert( i );			// 3
				
				for( var i=0; i<aBtn.length; i++ ){
					aBtn[i].style.background = 'yellow';
				}
				
				QQ: 1056104999
				bbs.miaov.com
				
			};
		}
	};
	</script>
	</head>

	<body>
	</body>
	</html>


	