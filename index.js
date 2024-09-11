const scriptURL =
  "https://script.google.com/macros/s/AKfycbx3uon5Bn0L1ybO6TtBjfnYBMext5h-so0VOHDoxG0adXSHG3u7_oe1gDD5apEbZ272CQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Signing Up!";
      setTimeout(function () {
        msg.innerHTML = " ";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
