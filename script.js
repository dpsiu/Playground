function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        return
      }
    }
  }

//   ---------------------- Card 2: Image Carousel ----------------------

let prev = document.querySelector('prev')
let next = document.querySelector('next')

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log('prev clicked')
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slide = document.getElementsByClassName('picture')
    let dots = document.getElementsByClassName("dot");
    console.log(slide.length)
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}

//   ---------------------- Card 3: Recursion Practice ----------------------

console.log('hey')

function sumRange(n, total = 0) {
  if (n <= 0) {
    return total
  } 
  return sumRange(n-1, total + n)
}

function power(n, e){
	if(e == 0) return 1;
	return n * power(n, e - 1);
}

// Basically, return the calculation formula, one # being the base,
//  the other # being the function again, but one less?

function factorial (n) {
  if (n == 0 || n == 1) return 1
  return n * factorial(n-1)
}

function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}

// array.shift removes and returns first element of array
// [1, 4, 6] = 24
// return 1 * [4, 6]
    // return 4 * [6]
        //  return 6 * []

// return in this case had to get a number, then calculate the slightly changed 2nd num

