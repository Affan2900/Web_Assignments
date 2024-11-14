function toggleDetails(id) {
  const details = document.querySelector(`.details-${id}`);
  const button = document.querySelector(`button[onclick="toggleDetails(${id})"]`);
  
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
  const button = document.querySelector('.color-change-button');
  const icon = document.querySelector('.sun-icon');
  
  // Toggle the dark theme class
  body.classList.toggle('dark-theme');
  
  // Change icon based on theme
  if (body.classList.contains('dark-theme')) {
    icon.textContent = '🌙'; // Dark moon icon for dark theme
  } else {
    icon.textContent = '☀️'; // Sun icon for light theme
  }
}
