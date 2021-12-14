$(":input[name='Person_Query']")
  .on("change", function () {
    $("textarea[name='Question']").toggle(
      this.value === "Question" && this.checked
    );
  })
  .change();

$(":input[name='Person_Query']")
  .on("change", function () {
    $("textarea[name='comments']").toggle(
      this.value === "Comments" && this.checked
    );
  })
  .change();

$(":input[name='Person_Query']")
  .on("change", function () {
    $("input[name='rate']").toggle(this.value === "Rate" && this.checked);
  })
  .change();

let form = document.querySelector("#appt-form");
let submitBtn = document.querySelector("#submit");
let resetBtn = document.querySelector("#reset");

submitBtn.onclick = (event) => {
  form.classList.add("was-validated");
};

resetBtn.onclick = (event) => {
  form.classList.remove("was-validated");
};

form.phone.oninput = (event) => {
  let phone = form.phone.value;
  let r = /^((\(\d{3}\))|(\d{3}))\s?\d{3}[\s-]?\d{4}$/;
  if (r.test(phone)) {
    form.phone.setCustomValidity("");
  } else {
    form.phone.setCustomValidity("Please input a valid phone number.");
  }
};

form["postal-code"].oninput = (event) => {
  let postalCode = form["postal-code"].value;
  let r = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
  if (r.test(postalCode)) {
    form["postal-code"].setCustomValidity("");
  } else {
    form["postal-code"].setCustomValidity(
      "Please input a valid Canadian postal code."
    );
  }
};

form.rate.oninput = (event) => {
  let new_r = form.rate.value;

  if (new_r > 25.9) {
    form.rate.setCustomValidity("");
  } else {
    form.rate.setCustomValidity("Sorry, Hourly rate is low");
  }
};
