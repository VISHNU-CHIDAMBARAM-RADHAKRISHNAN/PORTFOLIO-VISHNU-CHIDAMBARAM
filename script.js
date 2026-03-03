// script.js write javascript code here
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const pdfUrl = "Vishnu_chidambaram_Radhakrishnan_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Vishnu_Chidambaram_R_Resume.pdf";
  link.click();
});

// Theme Management
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Initialize theme
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
} else if (prefersDark) {
  html.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.querySelector(".back-to-top");

  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show back to top button when user scrolls down 300px
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
});
