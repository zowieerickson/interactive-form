// Selectors
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const activitiesBox = document.querySelector("#activities-box");
const ccNum = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");
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
// const checkbox = document.querySelector("#activities-box input");
const payment = document.querySelector("#payment");
const form = document.querySelector("form");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("focus", () => {
    checkboxes[i].parentElement.classList.add("focus");
  });
  checkboxes[i].addEventListener("blur", () => {
    checkboxes[i].parentElement.classList.remove("focus");
  });
}

// Intros
name.focus();
otherJobRole.style.display = "none";
color.disabled = true;
document.querySelector("#paypal").style.display = "none";
document.querySelector("#bitcoin").style.display = "none";

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
let total = 0;
activities.addEventListener("change", (e) => {
  let clicked = e.target;
  let cost = parseInt(clicked.getAttribute("data-cost"));

  if (clicked.checked) {
    total += cost;
  } else {
    total -= cost;
  }
  totalCost.innerHTML = total;
});

// Payment Info
payment.addEventListener("change", () => {
  if (payment.value == "paypal") {
    document.querySelector("#credit-card").style.display = "none";
    document.querySelector("#bitcoin").style.display = "none";
    document.querySelector("#paypal").style.display = "";
  } else if (payment.value == "bitcoin") {
    document.querySelector("#bitcoin").style.display = "";
    document.querySelector("#paypal").style.display = "none";
    document.querySelector("#credit-card").style.display = "none";
  } else if (payment.value == "credit-card") {
    document.querySelector("#credit-card").style.display = "";
    document.querySelector("#paypal").style.display = "none";
    document.querySelector("#bitcoin").style.display = "none";
  }
});

// Validation
const validationPass = (element) => {
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.lastElementChild.style.display = "none";
};

const validationFail = (element) => {
  element.parentElement.classList.add("not-valid");
  element.parentElement.classList.remove("valid");
  element.parentElement.lastElementChild.style.display = "block";
};

const nameValidator = () => {
  const nameValue = document.querySelector("#name").value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);

  if (nameIsValid) {
    validationPass(name);
  } else {
    validationFail(name);
  }
  return nameIsValid;
};

const emailValidator = () => {
  const emailValue = document.querySelector("#email").value;
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  if (emailIsValid) {
    validationPass(email);
  } else {
    validationFail(email);
  }
  return emailIsValid;
};

const activityValidator = () => {
  const activitySectionIsValid = total > 0;
  if (activitySectionIsValid) {
    validationPass(activitiesBox);
  } else {
    validationFail(activitiesBox);
  }
  return activitySectionIsValid;
};

const cardNumberValidator = () => {
  const cardValue = document.querySelector("#cc-num").value;
  const cardIsValid = /^\d{16}$|^\d{13}$/.test(cardValue);

  if (cardIsValid) {
    validationPass(ccNum);
  } else {
    validationFail(ccNum);
  }
  return cardIsValid;
};

const cvvValidator = () => {
  const cvvValue = document.querySelector("#cvv").value;
  const cvvIsValid = /^\d{3}$/.test(cvvValue);

  if (cvvIsValid) {
    validationPass(cvv);
  } else {
    validationFail(cvv);
  }

  return cvvIsValid;
};

const zipValidator = () => {
  const zipValue = document.querySelector("#zip").value;
  const zipIsValid = /^\d{5}$/.test(zipValue);

  if (zipIsValid) {
    validationPass(zip);
  } else if (!zipIsValid) {
    validationFail(zip);
  }

  return zipIsValid;
};

form.addEventListener("submit", (e) => {
  if (!nameValidator()) {
    e.preventDefault();
  }

  if (!emailValidator()) {
    e.preventDefault();
  }

  if (!activityValidator()) {
    e.preventDefault();
  }

  if (payment.value == "credit-card") {
    if (!cardNumberValidator()) {
      e.preventDefault();
    }
    if (!cvvValidator()) {
      e.preventDefault();
    }
    if (!zipValidator()) {
      e.preventDefault();
    }
  }
});
