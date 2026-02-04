const noBtn = document.getElementById("noBtn");
const tooltip = document.getElementById("tooltip");

let scale = 1;

function goYes() {
  window.location.href = "yes.html";
}

// NO button shrink logic
function shrinkNo() {
  scale *= 0.6; // 40% shrink each time
  noBtn.style.transform = `scale(${scale})`;
  tooltip.style.display = "block";
}

noBtn.addEventListener("touchstart", shrinkNo);
noBtn.addEventListener("click", shrinkNo);

// Floating hearts ONLY for second page
if (window.location.pathname.includes("yes")) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = Math.random() * 20 + "vh";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }, 150);
}
