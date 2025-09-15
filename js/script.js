// Dark mode toggle
const toggle = document.querySelector('#dark-mode-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const frm = document.querySelector('.form');
  
  if (document.body.classList.contains('dark-mode')) {
    frm.style.backgroundColor = 'black';
  } else {
    frm.style.backgroundColor = ''; // resets to original color from CSS
  }
});
 
// Simple form validation for contact page
function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  if (name == "" || email == "") {
    alert("Name and Email must be filled out!");
    return false;
  }
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll-triggered animations
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let el of revealElements) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);


const bttn = document.querySelector('.btn');
if (bttn) {
  bttn.addEventListener('mouseover', () => {
    bttn.style.backgroundColor = 'green';
  });
  bttn.addEventListener('mouseout', () => {
    bttn.style.backgroundColor = ''; // resets
  });
}


const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Initial display
showSlide(current);

// Automatic slideshow every 3 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000); // 3000 ms = 3 seconds






