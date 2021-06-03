// Selectors
const name = document.querySelector("#name");
const jobRole = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");

// Intros
name.focus();
otherJobRole.style.display = "none";

jobRole.addEventListener("change", (e) => {
  if (jobRole.value == "other") {
    otherJobRole.style.display = "";
  } else if (jobRole.value !== "other") {
    otherJobRole.style.display = "none";
  }
});
