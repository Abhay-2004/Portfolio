$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  var typed = new Typed(".typing-text", {
    strings: ["Web Development", "App Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });

  // Function to fetch skills data
  async function fetchSkills() {
    try {
      const response = await fetch("skills.json");
      return await response.json();
    } catch (error) {
      console.error("Error fetching skills:", error);
      return [];
    }
  }

  // Function to display skills
  function displaySkills(skills) {
    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;

    let skillsHTML = "";
    skills.forEach((skill) => {
      skillsHTML += `
            <div class="bar">
                <div class="info">
                    <img src="${skill.icon}" alt="${skill.name}" />
                    <span>${skill.name}</span>
                </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillsHTML;
  }

  // Fetch and display skills
  fetchSkills().then(displaySkills);

  // ScrollReveal Animations
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  srtop.reveal(".home .content h3", { delay: 200 });
  srtop.reveal(".home .content p", { delay: 200 });
  srtop.reveal(".home .content .btn", { delay: 200 });
  srtop.reveal(".home .image", { delay: 400 });
  srtop.reveal(".home .linkedin", { interval: 600 });
  srtop.reveal(".home .github", { interval: 800 });
  srtop.reveal(".home .youtube", { interval: 1000 });
  srtop.reveal(".about .content h3", { delay: 200 });
  srtop.reveal(".about .content .tag", { delay: 200 });
  srtop.reveal(".about .content p", { delay: 200 });
  srtop.reveal(".about .content .box-container", { delay: 200 });
  srtop.reveal(".about .content .resumebtn", { delay: 200 });
  srtop.reveal(".skills .container", { interval: 200 });
  srtop.reveal(".skills .container .bar", { delay: 400 });
  srtop.reveal(".education .box", { interval: 200 });
  srtop.reveal(".work .box", { interval: 200 });
  srtop.reveal(".experience .timeline", { delay: 400 });
  srtop.reveal(".experience .timeline .container", { interval: 400 });
  srtop.reveal(".awards .heading", { delay: 200 });
  srtop.reveal(".awards-container", { delay: 400 });

  // Awards Section JavaScript
  const slider = document.querySelector('.awards-slider');
  const slides = document.querySelectorAll('.award-slide');
  const prevBtn = document.querySelector('.award-nav.prev');
  const nextBtn = document.querySelector('.award-nav.next');
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
  });

  let autoScroll;

  function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 5000);
  }

  function resetAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
  }

  startAutoScroll();

  // Pause auto-scroll when hovering over the slider
  slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
  slider.addEventListener('mouseleave', startAutoScroll);

// Counter animation function
function runCounters() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    
    // Adjust the duration based on the target value
    const duration = target < 100 ? 2000 : 1000; // 2 seconds for small numbers, 1 second for large numbers
    const steps = 100; // Number of steps in the animation
    const increment = target / steps;
    const stepTime = duration / steps;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.round(count);
        setTimeout(updateCount, stepTime);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Run the counter animation when the about section is in view
const aboutSection = document.querySelector('#about');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    runCounters();
    observer.unobserve(aboutSection);
  }
}, { threshold: 0.5 });

observer.observe(aboutSection);
});