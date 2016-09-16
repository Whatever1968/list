//  Exercise:  Create a to do List app
function button() {
	var item = document.getElementById("input").value
	var text = document.createTextNode(item)
	var list = document.createElement("li")
	list.appendChild(text)
	document.getElementById("todoList").appendChild(list)
}