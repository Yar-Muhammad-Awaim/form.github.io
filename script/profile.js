document.addEventListener("DOMContentLoaded", () => {
  let username = document.querySelector("#username");
  let bioElement = document.querySelector("textarea");
  let verifiedEmailSelector = document.querySelector("#verified-email");
  let urls = document.querySelectorAll(".url-container input[type='text']");

  bioElement.value =
    bioElement.getAttribute("defaultValue") || "I own a computer.";
  updateBio();
  updateUsername();
  updateVerifiedEmail();
  updateURLs();

  bioElement.addEventListener("input", updateBio);
  bioElement.addEventListener("change", updateBio);
  username.addEventListener("input", updateUsername);
  verifiedEmailSelector.addEventListener("change", updateVerifiedEmail);
  urls.forEach((url) => url.addEventListener("input", updateURLs));
  urls.forEach((url) => url.addEventListener("change", updateURLs));
});

function updateUsername() {
  let username = document.querySelector("#username");
  document.querySelector("#username-json").innerText = JSON.stringify(
    username.value
  );
}

function updateBio() {
  document.querySelector("#bio-json").innerText = JSON.stringify(
    document.querySelector("textarea").value
  );
}

function updateVerifiedEmail() {
  let selectedOption = document.querySelector("#verified-email");
  document.querySelector("#email-json").innerText = JSON.stringify(
    selectedOption.value
  );
}

function updateURLs() {
  let urls = document.querySelectorAll(".url-container input[type='text']");
  let urlValues = Array.from(urls).map((url) => url.value);
  
  // Format the URLs with proper indentation
  if (urlValues.length === 0) {
    document.querySelector("#url-json").innerText = "[]";
  } else {
    let formattedUrls = "[\n\t" + urlValues.map(url => JSON.stringify(url)).join(",\n\t") + "\n\t]";
    document.querySelector("#url-json").innerText = formattedUrls;
  }
}

function addURL() {
  let urlContainer = document.querySelector(".url-container");
  let newUrlInput = document.createElement("input");
  newUrlInput.setAttribute("type", "text");
  newUrlInput.setAttribute("placeholder", "");
  newUrlInput.setAttribute("class", "url-input");
  newUrlInput.setAttribute("id", `url-${urlContainer.childElementCount + 1}`);
  urlContainer.appendChild(newUrlInput);
  newUrlInput.addEventListener("input", updateURLs);
  newUrlInput.addEventListener("change", updateURLs);
}

function updateProfile() {
  let bio = JSON.stringify("I own a computer.");
  document.querySelector("#bio-json").innerText = bio;

  let username = JSON.stringify(" ");
  document.querySelector("#username-json").innerText = username;

  let verifiedEmail = JSON.stringify(" ");
  document.querySelector("#email-json").innerText = verifiedEmail;

  let urlValues = ["https://shadcn.com", "https://twitter.com/shadcn"];
  let formattedUrls = "[\n\t" + urlValues.map(url => JSON.stringify(url)).join(",\n\t") + "\n\t]";
  document.querySelector("#url-json").innerText = formattedUrls;
}