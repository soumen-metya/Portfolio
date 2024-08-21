const scriptURL =
  "https://script.google.com/macros/s/AKfycbyizzWhrGTd_ggc9IJkx7oY9nhOSvx_xq6iRC6rWyScdCZR8PJfDuIx2CF_KoDVx93T/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(function () {
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// response of the sbmission //

document.getElementById("btnSubmit").addEventListener("click", function () {
  alert("The Form Submitted Successfully!");
});
