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

function fibs(n) {
  let array = [0, 1]
  let n1 = 0
  let n2 = 1

  if (n == 0 || n == 1) return array

  for (i = 0; i <= n-3; i++) {
    let n3 = n2 + n1
    array.push(n3)

    n1 = n2
    n2 = n3
  }
  console.log(array)
}

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
}


function mergeSort (array) {
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length/2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  console.log(sortedLeft)
  console.log(sortedRight)

  return merge(sortedLeft, sortedRight)
}

function merge (left, right) {
  result = []
  leftIndex = 0
  rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex ++
    } else {
      result.push(right[rightIndex])
      rightIndex ++
    }
  }

  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

  return result
}



// Think what are my cases and hwo I'd go about it.

// First, base case. When array is <= 1.

// We need to lay out the rules for how to break halves.
// left, middle, right. Take our array, slice into sep arrays, continue down 
//    until each array has 1 element. Keep going if index of left is lower than
//    index of right. BC this means 2 items. If only 1, then they are the same.

// This is first half done. Breaking the array into tiny ones. Now we merge and sort.
// In pseudo-code, we compare left and right halves and set left and right indexes to 0
//    (How do we identify which parts are left and right? Are these just the return?)
//    Seems like they are defined as left and right from the beginning. 
// L is 0, middle, and R is middle onwards. BC it is recursively recalled, they are
//  continuously broken down. Starts down up. L and R are only one thing. THat which
//    is being compared.