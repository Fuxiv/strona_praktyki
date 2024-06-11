var slideIndex = 0;
var sliding;
carousel();

function carousel() {
  let i = 0;
  var slide = document.getElementsByClassName("sliding");
  let description = document.getElementById("imageDescription");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slide.length) {slideIndex = 1}
  sliding = slide[slideIndex-1].id;
  switch(sliding){
    case "ch1": description.innerHTML = "CH1"; break;
    case "ch2": description.innerHTML = "CH2"; break;
  }
  slide[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}