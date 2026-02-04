const noBtn = document.getElementById("noBtn");
const tooltip = document.getElementById("tooltip");

function goYes() {
  window.location.href = "yes.html";
}

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  tooltip.style.display = "block";
  tooltip.textContent = "Option unavailable ❌";
});