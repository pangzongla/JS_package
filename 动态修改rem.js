<<<<<<< HEAD
// 这个只适用于开发移动端
window.onload = function() {
	// 窗口改变也执行
	window.onresize = setRemFont
	function setRemFont() {
		var domHtml = document.documentElement
		var deviceWidth = domHtml.clientWidth
		// 375是你开发时选的固定宽度,100是你设定的rem值为多少px
		domHtml.style.fontSize = deviceWidth/375 * 100 + "px"
	}
	setRemFont()
}



// 这个适用于开发web的pc和移动端
if (document.documentElement.clientWidth < 500) {
	window.onload = setRemFont()
	window.onresize = setRemFont()
}else{
	document.documentElement.style.fontSize = 10 + "px"
}

function setRemFont() {
	var domHtml = document.documentElement
	var deviceWidth = domHtml.clientWidth
	domHtml.style.fontSize = deviceWidth / 375 * 10 + "px"
=======
// 这个只适用于开发移动端
window.onload = function() {
	// 窗口改变也执行
	window.onresize = setRemFont
	function setRemFont() {
		var domHtml = document.documentElement
		var deviceWidth = domHtml.clientWidth
		// 375是你开发时选的固定宽度,100是你设定的rem值为多少px
		domHtml.style.fontSize = deviceWidth/375 * 100 + "px"
	}
	setRemFont()
}



// 这个适用于开发web的pc和移动端
if (document.documentElement.clientWidth < 500) {
	window.onload = setRemFont()
	window.onresize = setRemFont()
}else{
	document.documentElement.style.fontSize = 10 + "px"
}

function setRemFont() {
	var domHtml = document.documentElement
	var deviceWidth = domHtml.clientWidth
	domHtml.style.fontSize = deviceWidth / 375 * 10 + "px"
>>>>>>> 54dc926e033382b984d277118489c25166d63e2e
}