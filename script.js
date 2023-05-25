//your JS code here. If required.

const sizeElement = document.createElement("h1");
sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
document.body.append(sizeElement);

window.onresize = function(){
	// console.log(window.innerHeight,window.innerHeight)
	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
	document.body.append(sizeElement);
}