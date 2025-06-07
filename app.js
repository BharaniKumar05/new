document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      e.preventDefault();
      alert("Please fill out both fields.");
    } else {
      // Redirects to dashboard.html on success (mock)
      // In real app, validate with backend
      window.location.href = "dashboard.html";
    }
  });
});
