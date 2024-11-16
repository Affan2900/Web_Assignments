// Show Details Button
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

// theme-toggle.js
function toggleTheme() {
  const body = document.body;
  const button = document.querySelector(".color-change-button");
  const icon = document.querySelector(".sun-icon");

  // Toggle the dark theme class
  body.classList.toggle("dark-theme");

  // Change icon based on theme
  if (body.classList.contains("dark-theme")) {
    icon.textContent = "🌙"; // Dark moon icon for dark theme
  } else {
    icon.textContent = "☀️"; // Sun icon for light theme
  }
}


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

function addAnimalFeature() {
  showAnimalFeatureForm()
    .then((formData) => {
      console.log('Form data received:', formData);

      // Create an object from the returned promise data
      const newAnimal = {
        name: formData.name,
        image: formData.image,
        description: formData.description,
      };

  

      // Append the new animal as a child to the .animal-container element
      const animalContainer = document.querySelector('.animal-container');
      if (!animalContainer) {
        console.error('.animal-container element not found.');
        return;
      }

      const newArticle = document.createElement('article');
      newArticle.classList.add('animal-feature');
      newArticle.innerHTML = `
          <img src="${newAnimal.image}" alt="${newAnimal.name}" class="animal-image">
          <div class="animal-description">
              <h3>${newAnimal.name}</h3>
              <p>${newAnimal.description}</p>
          </div>
      `;

      console.log('Appending to .animal-container...');
      animalContainer.appendChild(newArticle);

      console.log('Animal added successfully:', newAnimal);
    })
    .catch((error) => {
      console.error('Failed to add animal:', error.message);
    });
}

function removeLastAnimal() {
  // Select the animal-container element
  const animalContainer = document.querySelector(".animal-container");
  // Check if the container is now empty
  if (animalContainer.children.length === 0) {
    alert("Add More Animals!");
  }
  // Check if there are any children
  if (animalContainer.children.length > 0) {
    // Remove the last child
    animalContainer.removeChild(animalContainer.lastElementChild);
  }
}