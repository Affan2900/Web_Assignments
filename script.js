// Validate Contact Form
function validateContactForm() {
  document.querySelectorAll(".error-message").forEach((elem) => elem.textContent = "");
  document.getElementById("successMessage").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name cannot be empty.";
    isValid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }
  if (!subject) {
    document.getElementById("subjectError").textContent = "Subject cannot be empty.";
    isValid = false;
  }
  if (!message) {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Message sent successfully!";
  }
}

// Change Text Style for All Body Elements
function changeAllTextStyles() {
  const body = document.body;
  body.style.fontWeight = "bold";
  body.style.fontStyle = "italic";
  body.style.color = "blue";
  body.style.fontFamily = "'Doto', sans-serif";
}

// Reset Text Style for All Body Elements
function resetAllTextStyles() {
  const body = document.body;
  body.style.fontWeight = "normal";
  body.style.fontStyle = "normal";
  body.style.color = "black";
  body.style.fontFamily = "";
}

// Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  const button = document.querySelector(".color-change-button");
  const icon = document.querySelector(".sun-icon");

  body.classList.toggle("dark-theme");

  icon.textContent = body.classList.contains("dark-theme") ? "🌙" : "☀️";
}

// Add and Remove Animal Features
function addAnimalFeature() {
  const animalContainer = document.querySelector(".animal-container");
  const newArticle = document.createElement("article");
  newArticle.classList.add("animal-feature");
  newArticle.innerHTML = `
      <img src="public/example.jpg" alt="New Animal" class="animal-image">
      <div class="animal-description">
          <h3>New Animal</h3>
          <p>Amazing details about this animal go here.</p>
      </div>
  `;
  animalContainer.appendChild(newArticle);
}

function removeLastAnimal() {
  const animalContainer = document.querySelector(".animal-container");
  if (animalContainer.children.length > 0) {
    animalContainer.removeChild(animalContainer.lastElementChild);
  } else {
    alert("No more animals to remove!");
  }
}
