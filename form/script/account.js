
let nameInput = document.querySelector("#name");
nameInput.addEventListener("input", () => {
  let name = nameInput.value;
  document.querySelector("#name-json").innerText = JSON.stringify(name);
});

let dateSelector = document.querySelector("#dob");

function setDisplayDate() {
  document.querySelector("#dob-json").innerText = JSON.stringify(new Date(dateSelector.value).toISOString());
};

dateSelector.addEventListener("change", () => {
  let selectedDate = new Date(dateSelector.value);
  
  if(selectedDate > new Date()) {
    alert("Please select your real date of birth.");
    dateSelector.value = "";
  }
});

dateSelector.addEventListener("change", setDisplayDate);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#languages").value = "English";
});



const languageMap = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  ru: "Russian",
  zh: "Chinese",
  ja: "Japanese",
  ko: "Korean",
  ar: "Arabic",
  hi: "Hindi",
};

function getKeyByValue(value, object) {
  for(key in object) 
    if (object[key] === value) {
      return key;
    }
  return en;
}

let languageSelector = () => {
  let selectedlanguage = document.querySelector("#languages").value;

  document.querySelector("#language-json").innerText = JSON.stringify(getKeyByValue(selectedlanguage, languageMap));
}

document.addEventListener("DOMContentLoaded", languageSelector);
document.addEventListener("change", languageSelector);


function updateAccount(){
  document.querySelector("#name-json").innerText = `""`;
  document.querySelector("#language-json").innerText = JSON.stringify("en");
  document.querySelector("#dob-json").innerText = "undefined";
}