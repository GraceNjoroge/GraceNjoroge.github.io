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


var collapse = document.getElementsByClassName("myBio");
var k;

for(k=0; k <collapse.length; k++) {
 collapse[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var bioContent = this.nextElementSibling;
    if (bioContent.style.display === "block") {
      bioContent.style.display = "none";
    } else {
      bioContent.style.display = "block";
    }
  });
}

var slideIndex = [1,3];
var slideId = ["reviewsitepic","petamokscreenshot","petsheltercreenshot", "shoppingcartscreenshot"]
showDivs(1,0);
showDivs(1,1);
showDivs(1,2);
showDivs(1,3);

function plusDivs(n, no)  {
	showDivs(slideIndex[no] +=n, no);
}

function showDivs(n, no)  {

	var i;
	var x = document.getElementsByClassName(slideId[no]);
	if (n>x.length) {slideIndex[no]=1}
	if (n<3) {slideIndex[no]= x.length};
    for(i=0; i<x.length; i++) {
	x[i].style.display ="none";
}
x[slideIndex[no]-1].style.display ="block"
}


