// Toggle Details Button
function toggleDetails(id) {
  const details = document.querySelector(`.details-${id}`);
  const button = document.querySelector(
    `button[onclick="toggleDetails(${id})"]`
  );

  if (details.style.display === "none" || !details.style.display) {
    details.style.display = "block";
    button.textContent = "Hide Details";
  } else {
    details.style.display = "none";
    button.textContent = "Show More Details";
  }
}

// Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".sun-icon");

  body.classList.toggle("dark-theme");

  // Change icon based on theme
  icon.textContent = body.classList.contains("dark-theme") ? "🌙" : "☀️";
}

// Show Animal Feature Form
function showAnimalFeatureForm() {
  return new Promise((resolve, reject) => {
    // Create the form dialog container
    const formContainer = document.createElement("div");
    formContainer.style.position = "fixed";
    formContainer.style.top = "50%";
    formContainer.style.left = "50%";
    formContainer.style.transform = "translate(-50%, -50%)";
    formContainer.style.background = "#fff";
    formContainer.style.padding = "20px";
    formContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    formContainer.style.zIndex = "1000";
    formContainer.style.borderRadius = "8px";

    // Form HTML
    formContainer.innerHTML = `
      <div class="form-container">
        <h2>Animal Feature Form</h2>
        <form id="animalFeatureForm">
            <label for="image">Image:</label><br>
            <input type="text" id="image" name="image" placeholder="Enter image URL"><br><br>
            
            <label for="name">Name: <span style="color: red;">*</span></label><br>
            <input type="text" id="name" name="name" placeholder="Enter name" required><br><br>
            
            <label for="description">Description:<span style="color: red;">*</span></label><br>
            <textarea id="description" name="description" rows="4" placeholder="Enter description" required></textarea><br><br>
            
            <button type="submit">Submit</button>
            <button type="button" id="cancelBtn">Cancel</button>
        </form>
      </div>
    `;

    // Append form to the body
    document.body.appendChild(formContainer);

    // Handle form submission
    document.getElementById("animalFeatureForm").onsubmit = (e) => {
      e.preventDefault();

      const imageInput =
        document.getElementById("image").value.trim() || "public/default.jpg";
      const nameInput = document.getElementById("name").value.trim();
      const descriptionInput = document
        .getElementById("description")
        .value.trim();

      if (!nameInput || !descriptionInput) {
        alert("Name and Description are required!");
        return;
      }

      // Remove the form container
      formContainer.remove();

      // Resolve the promise with the object
      resolve({
        name: nameInput,
        image: imageInput,
        description: descriptionInput,
      });
    };

    // Cancel button functionality
    document.getElementById("cancelBtn").onclick = () => {
      // Remove the form container
      formContainer.remove();

      // Reject the promise
      reject(new Error("Form cancelled by user."));
    };
  });
}

// Add Animal Feature
function addAnimalFeature() {
  showAnimalFeatureForm()
    .then((formData) => {
      console.log("Form data received:", formData);

      // Create an object from the returned promise data
      const newAnimal = {
        name: formData.name,
        image: formData.image,
        description: formData.description,
      };

      // Append the new animal as a child to the .animal-container element
      const animalContainer = document.querySelector(".animal-container");
      if (!animalContainer) {
        console.error(".animal-container element not found.");
        return;
      }

      const newArticle = document.createElement("article");
      newArticle.classList.add("animal-feature");
      newArticle.innerHTML = `
          <img src="${newAnimal.image}" alt="${newAnimal.name}" class="animal-image">
          <div class="animal-description">
              <h3>${newAnimal.name}</h3>
              <p>${newAnimal.description}</p>
          </div>
      `;

      animalContainer.appendChild(newArticle);

      console.log("Animal added successfully:", newAnimal);
    })
    .catch((error) => {
      console.error("Failed to add animal:", error.message);
    });
}

// Remove Last Animal
function removeLastAnimal() {
  const animalContainer = document.querySelector(".animal-container");

  if (animalContainer.children.length === 0) {
    alert("No More Animals to Remove!");
    return;
  }

  if (animalContainer.children.length > 0) {
    animalContainer.removeChild(animalContainer.lastElementChild);
  }
}

// Validate Contact Form
function validateContactForm() {
  document.querySelectorAll(".error-message").forEach((elem) => (elem.textContent = ""));
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
