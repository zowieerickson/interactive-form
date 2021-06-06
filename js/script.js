// Selectors
const name = document.querySelector("#name");
const jobRole = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");
const color = document.querySelector("#color");
const design = document.querySelector("#design");
const jsPuns = document.querySelectorAll("[data-theme='js puns']");
console.log(jsPuns);

// Intros
name.focus();
otherJobRole.style.display = "none";
// color.disabled = true;

jobRole.addEventListener("change", () => {
  if (jobRole.value == "other") {
    otherJobRole.style.display = "";
  } else if (jobRole.value !== "other") {
    otherJobRole.style.display = "none";
  }
});

design.addEventListener("change", (e) => {
  color.disabled = false;
  if (design.value.includes("puns")) {
    for (let i = 0; i < jsPuns.length; i++) {
      jsPuns[i].style.display = "hidden";
      console.log(jsPuns[i]);
      // design.remove(jsPuns[i]);
      console.log("selected puns");
    }
  }
});
