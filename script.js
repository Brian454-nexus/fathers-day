// Typewriter effect: reveal greeting one character at a time
var i = 0;
var text = "Dear Mom, Happy Mother's Day!"; // Customize your greeting text
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150); // typing speed (lower = faster)
  }
}
// Start typing on load
typeWriter();

// Ensure the heartfelt message appears correctly
function revealMessage() {
  const messageElement = document.getElementById("message");
  messageElement.classList.remove("hidden"); // Remove the "hidden" class
  const words = messageElement.innerHTML.split(" "); // Use innerHTML to preserve formatting
  messageElement.innerHTML = ""; // Clear the content

  // Add the words to the paragraph with a nice animation
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.innerHTML = word + " "; // Use innerHTML to preserve formatting
    span.classList.add("inline-block", "mr-1");
    span.style.opacity = 0;
    span.style.transition = "opacity 0.5s ease";
    span.style.transitionDelay = `${index * 0.3}s`;
    messageElement.appendChild(span);

    // Trigger the fade-in effect
    setTimeout(() => {
      span.style.opacity = 1;
    }, 50);
  });
}
// Update button click event to use the new revealMessage function
document.getElementById("reveal-btn").addEventListener("click", function () {
  revealMessage();
  this.style.display = "none"; // Hide the button after revealing
});
