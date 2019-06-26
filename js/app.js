// Make nav list elements get larger when you hover over them
[].forEach.call(document.querySelectorAll('nav > ul > li'), function (link) {
    link.addEventListener('mouseover', sizingHandler);
    link.addEventListener('mouseout', desizingHandler);
});

function sizingHandler() {
    this.dataset.initialFontSize = this.style.fontSize;
    this.style.fontSize = '20px';
}

function desizingHandler() {
    this.style.fontSize = '15px';
}


function collapsefunc() {

var collapseButton = document.getElementById("#skills");
var collapseButtonText = document.getElementById('#collapsible');
if (collapseButton.classList.contains("open"))   {
	collapseButton.classList.remove("open")
	collapseButtonText.innerHTML = "show Skills";
}else {
	collapseButton.classList.add("open")
	collapseButtonText.innerHTML = "Hide Skills";
}



}