// script.js

document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector("button[type='submit']");
  const emailInput = document.getElementById("Email");
  const passwordInput = document.getElementById("Password");
  const rememberCheck = document.querySelector("input[type='checkbox']");
  const forgotLink = document.querySelector("a");

  // Login button functionality
  signInBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      alert("⚠️ Please fill all fields!");
    } else {
      alert("✅ Login Successful!");
    }
  });

  // Checkbox functionality
  rememberCheck.addEventListener("change", () => {
    if (rememberCheck.checked) {
      alert("✔ You will be remembered!");
    } else {
      alert("❌ You unchecked Remember me!");
    }
  });

  // Forgot password functionality
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault(); // link ke default kaam ko rokta hai
    alert("🔑 Password reset link sent to your email!");
  });
});
