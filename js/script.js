// Selectors
const name = document.querySelector("#name");
const jobRole = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");
const color = document.querySelector("#color");
const design = document.querySelector("#design");
const jsPuns = document.querySelectorAll("[data-theme='js puns']");
const heartJs = document.querySelectorAll("[data-theme='heart js']");
const activities = document.querySelector("#activities");
const activityCost = document.querySelectorAll(".activity-cost");
const totalCost = document.querySelector("#total-cost");
const checkboxes = document.querySelectorAll("#activities input");
console.log(checkboxes);

// Intros
name.focus();
otherJobRole.style.display = "none";
color.disabled = true;

// Job role selection
jobRole.addEventListener("change", () => {
  if (jobRole.value == "other") {
    otherJobRole.style.display = "";
  } else if (jobRole.value !== "other") {
    otherJobRole.style.display = "none";
  }
});

// Shirt selection
design.addEventListener("change", () => {
  color.disabled = false;

  if (design.value.includes("js puns")) {
    for (let i = 0; i < heartJs.length; i++) {
      heartJs[i].hidden = true;
    }
    for (let i = 0; i < heartJs.length; i++) {
      jsPuns[0].selected = true;
      if ((jsPuns[i].hidden = true)) {
        jsPuns[i].hidden = false;
      }
    }
  }

  if (design.value.includes("heart js")) {
    for (let i = 0; i < jsPuns.length; i++) {
      jsPuns[i].hidden = true;
    }
    for (let i = 0; i < jsPuns.length; i++) {
      heartJs[0].selected = true;
      if ((heartJs[i].hidden = true)) {
        heartJs[i].hidden = false;
      }
    }
  }
});

// Activities calculation
activities.addEventListener("change", (e) => {
  let total = 0;
  let clicked = e.target;
  let cost = parseInt(clicked.getAttribute("data-cost"));

  console.log(cost);
for(let i = 0; i < )
  if (clicked.checked) {
    console.log(`it's checked bro`);
    total += cost;
    console.log(total);
  } else {
    console.log(`it is not checked bro`);
    total -= cost;
    console.log(total);
  }
  totalCost.innerHTML = total;
});
