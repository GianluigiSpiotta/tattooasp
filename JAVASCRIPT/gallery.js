var images = [
    "../FOTO/gallery1.jpg",
    "../FOTO/gallery2.png",
    "../FOTO/gallery3.png",
    "../FOTO/gallery4.png",
    "../FOTO/gallery5.png",
    "../FOTO/gallery6.png",
    "../FOTO/gallery7.png",
    "../FOTO/gallery8.png",
    "../FOTO/gallery9.png",
    "../FOTO/gallery10.png",
    "../FOTO/gallery11.png",
    "../FOTO/gallery12.png",
    "../FOTO/gallery13.png",
    "../FOTO/gallery14.png",
    "../FOTO/gallery15.png",
    "../FOTO/gallery16.png",
];

// funzione per caricare le immagini in modo automatico
function loadImages() {
    var gallery = document.querySelector(".gallery");
    images.forEach(function(imagePath) {
        var img = document.createElement("img");
        img.src = imagePath;
        img.alt = "Gallery Image";
        img.addEventListener("click", function() {
            openModal(imagePath);
        });
        gallery.appendChild(img);
    });
}

// Function to open modal and display the clicked image
function openModal(imagePath) {
    var modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="modal-content">
            <img src="${imagePath}" alt="Gallery Image">
        </div>
    `;
    document.body.appendChild(modal);
}

// Function to close the modal
function closeModal() {
    var modal = document.querySelector(".modal");
    modal.remove();
}

// Load images when the page is loaded
window.onload = loadImages;





/*
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Avanzamento automatico delle slide ogni 3 secondi



setInterval(function() {
    plusSlides(1);
}, 3000);



// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}
*/