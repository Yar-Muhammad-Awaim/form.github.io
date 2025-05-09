
function updatePreferences() {
  let fontChoice = document.querySelector("select")?.value || "inter";
  let themeChoice =
    document.querySelector('input[type="radio"]:checked')?.value || "light";

  let fontChoiceJSON = document.querySelector("#font-choice-json");
  if (fontChoiceJSON) {
    let fontChoiceUpdatedJSON = JSON.stringify(fontChoice);
    fontChoiceJSON.innerText = fontChoiceUpdatedJSON;
  }

  let themeChoiceJSON = document.querySelector("#theme-choice-json");
  if (themeChoiceJSON) {
    let themeChoiceUpdatedJSON = JSON.stringify(themeChoice);
    themeChoiceJSON.innerText = themeChoiceUpdatedJSON;
  }
}

document.addEventListener("change", updatePreferences);
document.addEventListener("DOMContentLoaded", updatePreferences);

function updatePreferencesDisplayJSON() {
  document.querySelector("#font-choice-json").innerText = JSON.stringify("inter");
  document.querySelector("#theme-choice-json").innerText = JSON.stringify("light");
}

document.querySelector("#update-preferences-button").addEventListener("click", updatePreferencesDisplayJSON);
