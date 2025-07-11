// Mobile navbar
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Highlight active nav link
document.querySelectorAll(".nav-links a").forEach(link => {
  if (window.location.href.includes(link.href)) {
    link.classList.add("active");
  }
});

// BMI calculation
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const result = document.getElementById("result");

  if (!weight || !height) {
    result.textContent = "Please enter valid numbers!";
    result.style.color = "#ff6b6b";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI is ${bmi} (${category})`;
  result.style.color = "#ffc107";
}

fetch("https://hangga-hub.github.io/components/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;

    // Add collapse menu toggle
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
      toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }

    // Highlight active link
    document.querySelectorAll(".nav-links a").forEach(link => {
      if (window.location.href.includes(link.href)) {
        link.classList.add("active");
      }
    });
  });
