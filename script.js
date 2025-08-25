// Animate HackerRank Hackos counter
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("hackos-count");
  let count = 0;
  const target = 1018;
  const speed = 10;

  function updateCounter() {
    if (count < target) {
      count += 5;
      counter.textContent = count;
      setTimeout(updateCounter, speed);
    } else {
      counter.textContent = target;
    }
  }
  updateCounter();
});
