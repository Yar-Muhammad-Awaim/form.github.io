function copyCode() {
  let code = document.querySelector("code").innerText;
  navigator.clipboard.writeText(code);
}

function highlightActiveLink() {
  let currentPage = window.location.pathname.split("/").pop();
  let linkToHighlight = document.querySelectorAll(".nav-links");

  linkToHighlight.forEach((link) => {
    let linkPage = link.getAttribute("href").split("/").pop();

    link.classList.remove("active-link");

    if (linkPage === currentPage) {
      let parentLi = link.parentElement;
      parentLi.classList.add("active-link");
    }
  });
}

document.addEventListener("DOMContentLoaded", highlightActiveLink);
