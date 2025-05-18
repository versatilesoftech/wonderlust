// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

// Initialize Swiper
const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 3,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Form Submission (prevent default)
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  });
}

// Countdown Timer
function updateCountdown() {
  const days = document.getElementById("countdown-days");
  const hours = document.getElementById("countdown-hours");
  const minutes = document.getElementById("countdown-minutes");
  const seconds = document.getElementById("countdown-seconds");

  let daysValue = parseInt(days.textContent);
  let hoursValue = parseInt(hours.textContent);
  let minutesValue = parseInt(minutes.textContent);
  let secondsValue = parseInt(seconds.textContent);

  secondsValue--;

  if (secondsValue < 0) {
    secondsValue = 59;
    minutesValue--;

    if (minutesValue < 0) {
      minutesValue = 59;
      hoursValue--;

      if (hoursValue < 0) {
        hoursValue = 23;
        daysValue--;

        if (daysValue < 0) {
          daysValue = 0;
          hoursValue = 0;
          minutesValue = 0;
          secondsValue = 0;
        }
      }
    }
  }

  days.textContent = daysValue;
  hours.textContent = hoursValue;
  minutes.textContent = minutesValue;
  seconds.textContent = secondsValue;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
