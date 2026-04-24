// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = "smooth";

  // Add click tracking for buttons
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const instagramBtn = document.getElementById("instagram-btn");

  // WhatsApp button click handler
  whatsappBtn.addEventListener("click", function (e) {
    // Add a subtle animation on click
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);

    // Optional: Add analytics tracking here
    console.log("WhatsApp button clicked");
  });

  // Instagram button click handler
  instagramBtn.addEventListener("click", function (e) {
    // Add a subtle animation on click
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);

    // Optional: Add analytics tracking here
    console.log("Instagram button clicked");
  });

  // Add parallax effect to background
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallax = document.body;
    const speed = scrolled * 0.5;
    parallax.style.backgroundPosition = `center ${speed}px`;
  });

  // Add hover effect enhancement for logo
  const logo = document.querySelector(".logo");


  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll(".btn, .main-text, .logo");
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Add touch feedback for mobile devices
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.95)";
    });

    button.addEventListener("touchend", function () {
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Add keyboard navigation support
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      // Ensure focus is visible
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", function () {
    document.body.classList.remove("keyboard-navigation");
  });

  // Add loading animation completion
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1000);

  // Console welcome message
  console.log("🎨 Ateliê Personalizados - Website carregado com sucesso!");
  console.log("💝 Em breve, belos itens personalizados para você!");
});

// Add CSS for keyboard navigation
const style = document.createElement("style");
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #7a7651 !important;
        outline-offset: 2px !important;
    }
    
    .loaded .content {
        transform: scale(1);
    }
`;
document.head.appendChild(style);


