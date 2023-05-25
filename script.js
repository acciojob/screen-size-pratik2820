//your JS code here. If required.
// we can also write in this way but code was not getting submitted so treied the other way
// const sizeElement = document.createElement("h1");
// sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
// document.body.append(sizeElement);

// window.onresize = function(){
// 	// console.log(window.innerHeight,window.innerHeight)
// 	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
// 	document.body.append(sizeElement);
// }


// other way to write the same code

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById("sizeInfo").innerHTML = "<h1>Width: " + w + " and Height: " + h + "</h1>";
}