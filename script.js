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
