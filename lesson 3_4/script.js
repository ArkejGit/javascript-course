window.onload = function() {
	var top = document.getElementById("top");
	top.innerHTML = "<h2>New content of top</h2>"
	top.style.color = "red";

	var paragraphs = document.getElementsByTagName("p");
	console.log("There are " + paragraphs.length + " paragraphs on the website");
}