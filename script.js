// script.js write javascript code here
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const pdfUrl = "/Vishnu_chidambaram_Radhakrishnan_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "resume.pdf";
  link.click();
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
