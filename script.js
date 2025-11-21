// Klik submenu
document.querySelectorAll(".submenu-item").forEach(item => {
  item.addEventListener("click", () => {
    alert("Klik: " + item.textContent.trim());
  });
});
