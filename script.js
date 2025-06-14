console.log("Script loaded!"); // Debug log to ensure script is loaded

// Fade-in message line by line with smooth, slow animation (ChatGPT-style)
function fadeInMessageLines() {
  const message = document.getElementById("message");
  const original = message.innerHTML;
  // Split by <br> for lines
  const lines = original
    .split(/<br\s*\/?>(?!$)/g)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  message.innerHTML = "";
  let i = 0;
  function showLine() {
    if (i < lines.length) {
      const div = document.createElement("div");
      div.style.opacity = 0;
      div.style.transition = "opacity 1.2s cubic-bezier(0.4,0,0.2,1)";
      div.style.fontSize = "1.2rem";
      div.style.marginBottom = "0.5em";
      div.innerHTML = lines[i];
      message.appendChild(div);
      setTimeout(() => {
        div.style.opacity = 1;
      }, 50);
      i++;
      setTimeout(showLine, 1800); // much slower, for a nicer effect
    }
  }
  showLine();
}

window.onload = function () {
  document.getElementById("greeting").style.visibility = "visible";
  const messageContainer = document.getElementById("message-container");
  messageContainer.classList.remove("hidden");
  messageContainer.style.opacity = 1;
  messageContainer.style.visibility = "visible";
  messageContainer.style.display = "block";
  document.getElementById("card").style.display = "block";
  fadeInMessageLines();
};
