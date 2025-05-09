function updateDisplayJSON() {
  let checkboxes = document.querySelectorAll('input[type="checkbox');

  let checkedItems = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedItems.unshift(checkbox.value);
    }
  });

  let updatedJSONFormatted = JSON.stringify(checkedItems)
    .split("[")
    .join("[\n\t")
    .split("]")
    .join("\n  ]")
    .split(",")
    .join(",\n\t");
  document.querySelector(".updated-json").innerText = updatedJSONFormatted;
}

document.addEventListener("change", updateDisplayJSON);

function updateDisplay() {
  document.querySelector(".updated-json").innerText = "[]";
}
