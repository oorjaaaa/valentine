const noBtn = document.getElementById("noBtn");
const tooltip = document.getElementById("tooltip");

let scale = 1;
let clicks = 0;

function goYes() {
  window.location.href = "yes.html";
}

function shrinkNo() {
  clicks++;
  scale *= 0.5; // 50% shrink each time
  noBtn.style.transform = `scale(${scale})`;

  if (clicks >= 3) {
    tooltip.style.display = "block";
  }
}

noBtn.addEventListener("click", shrinkNo);
noBtn.addEventListener("touchstart", shrinkNo);
