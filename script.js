console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements


let lo = document.querySelector("#location")
let para = document.querySelector("#locationText")

lo.addEventListener("click", function(event){
  para.textContent = "1300 Boynton Ave (moving soon!)"
})

// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence



let sLetter  = document.querySelector("#s")
let cLetter = document.querySelector("#c")
let oLetter = document.querySelector("#o")
let rLetter = document.querySelector("#r")
let eLetter = document.querySelector("#e")

sLetter.addEventListener("click", function(event){
  sLetter.textContent = "Self-awareness"
})

cLetter.addEventListener("click", function(event){
  cLetter.textContent = "Consistency"
})

oLetter.addEventListener("click", function(event){
  oLetter.textContent = "Ownership"
})

rLetter.addEventListener("click", function(event){
  rLetter.textContent = "Resillience"
})

eLetter.addEventListener("click", function(event){
  eLetter.textContent = "Excellence"
})

// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp

let frontSweat = document.querySelector("#front")
let frontSweater = document.querySelector("#front1")


frontSweat.addEventListener("mouseover", function(event){
  frontSweat.src = "joggers-back.webp"
})

frontSweat.addEventListener("mouseout", function(event){
  frontSweat.src = "joggers-front.webp"
})


frontSweater.addEventListener("mouseover", function(event){
  frontSweater.src = "sweater-back.webp"
})


frontSweater.addEventListener("mouseout", function(event){
  frontSweater.src = "sweater-front.webp"
})

// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)





