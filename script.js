// 1. Button click event
document.getElementById("myButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "green"; // Change button color
  });
  
  // 2. Hover effect
  document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
  });
  document.getElementById("hoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
  });
  
  // 3. Key press detection
  document.addEventListener("keydown", function(event) {
    document.getElementById("keyPressInfo").textContent = `You pressed: ${event.key}`;
  });
  
  // 4. Image gallery interaction (optional)
  const galleryImages = document.querySelectorAll(".gallery-image");
  galleryImages.forEach(image => {
    image.addEventListener("click", function() {
      alert(`You clicked on ${this.alt}`);
    });
  });
  
  // 5. Form validation (email and password)
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Please fill in all fields!");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters.");
    } else {
      alert("Form submitted successfully!");
    }
  });
  
  // Function to validate email format
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }
  