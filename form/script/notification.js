
function updateNotifications() {
  let notificationChoice = JSON.stringify(document.querySelector('input[type="radio"]:checked').value ?? 'all');
  document.querySelector("#notification-choice-json").innerText = notificationChoice;

  let communicationEmailsChoice = document.querySelector('#communication-emails-parent-div input[type="checkbox"]:checked')  ? 'true' : 'false';
  document.querySelector("#communication-emails-choice-json").innerText = communicationEmailsChoice;

  let marketingEmailsChoice = document.querySelector('#marketing-emails-parent-div input[type="checkbox"]:checked') ? 'true' : 'false';
  document.querySelector("#marketing-emails-choice-json").innerText = marketingEmailsChoice;

  let socialEmailsChoice = document.querySelector('#social-emails-parent-div input[type="checkbox"]:checked') ? 'true' : 'false';
  document.querySelector("#social-emails-choice-json").innerText = socialEmailsChoice;

  let securityEmailsChoice = document.querySelector('#security-emails-parent-div input[type="checkbox"]:checked') ? 'true' : 'false';
  document.querySelector("#security-emails-choice-json").innerText = securityEmailsChoice;

  let mobileChoice = document.querySelector('.mobile-choice input[type="checkbox"]:checked') ? 'true' : 'false';
  document.querySelector("#mobile-choice-json").innerText = mobileChoice;
}

document.addEventListener("change", updateNotifications);
document.addEventListener("DOMContentLoaded", updateNotifications);