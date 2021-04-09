// 鼠标移入显示悬浮说明的功能封装
/* obj为标签对象
text为当对象只有一个时,显示的文字
textObj为对象是一个集合时,按下标显示什么文字
textIndex为传入的集合里某个元素的下标 */
function pointShow(obj, text, textObj, textIndex) {
	obj.onmouseover = function(ev) {
		var ev = ev || event
		// 创建一个全局的说明悬浮框，添加css样式
		var pointNode = document.createElement("div")
		document.body.appendChild(pointNode)
		pointNode.id = "pointNode"
		pointNode.style.position = "absolute"
		pointNode.style.left = ev.clientX - 50 + "px"
		pointNode.style.top = ev.clientY + 20 + "px"
		pointNode.style.padding = "2px 10px"
		pointNode.style.border = "1px solid #eeeeee"
		pointNode.style.borderRadius = "4px"
		pointNode.style.backgroundColor = "#FFFFFF"
		if (text != null) {
			pointNode.innerText = text
		} else {
			pointNode.innerText = textObj[textIndex]
		}
	}
	obj.onmousemove = function(ev) {
		var ev = ev || event
		// 找到悬浮框的对象,接着给动态的位置信息
		var pointNode = document.getElementById("pointNode")
		pointNode.style.left = ev.clientX - 50 + "px"
		pointNode.style.top = ev.clientY + 20 + "px"
	}
	obj.onmouseout = function(ev) {
		var ev = ev || event
		// 销毁这个元素
		document.body.removeChild(pointNode)
	}
}
