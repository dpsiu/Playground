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
    console.log(slide.length)
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }

    slide[slideIndex-1].style.display = "block";

}