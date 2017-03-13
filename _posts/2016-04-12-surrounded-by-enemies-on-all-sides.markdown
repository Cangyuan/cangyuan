---
layout: post
title: for in遍历对象介绍
tags: javascript
comment: true
image: 
published: true
description: 
---
for in遍历对象示例代码

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<!DOCTYPE HTML>
		<html>
		<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>无标题文档</title>
		</head>

		<body>

		<script>
		var str = '';
		var num = 0;
		for ( var attr in document ) {
			str += num + '. ' + attr + ':' +document[attr] + '<br />';
			num ++;
		}
		document.body.innerHTML = str;
		</script>

		</body>
		</html>
	</body>
	</html>
