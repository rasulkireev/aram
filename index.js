console.log("hello world");

function incrementCount() {
  // Check if "count" key already exists in local storage
  if (localStorage.getItem("count")) {
    // If it exists, increment the count by 1
    const count = parseInt(localStorage.getItem("count"));
    localStorage.setItem("count", count + 1);
  } else {
    // If it doesn't exist, set the count to 1
    localStorage.setItem("count", 1);
  }

  updateCountDisplay();
}

function updateCountDisplay() {
  const countValue = localStorage.getItem("count");
  document.getElementById("countDisplay").textContent = countValue;
}
