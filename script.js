// ===============================
// 🌟 Fade-in sections on scroll
// ===============================
const sections = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in");
      else entry.target.classList.remove("fade-in");
    });
  },
  { threshold: 0.2 }
);
sections.forEach(section => {
  section.classList.add("fade-section"); // initial hidden
  sectionObserver.observe(section);
});

// ===============================
// 🍔 Hamburger Menu Toggle
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("change", () => {
  menu.style.display = menuToggle.checked ? "block" : "none";
});
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    menu.style.display = "none";
  });
});

// ===============================
// 🏆 HackerRank Hackos Counter
// ===============================
// (smooth animation)
function animateCounter(id, endValue, duration) {
  let startValue = 0, startTime = null;
  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    let value = Math.floor(progress * endValue);
    document.getElementById(id).textContent = value;
    if (progress < 1) requestAnimationFrame(updateCounter);
  }
  requestAnimationFrame(updateCounter);
}
animateCounter("hackos-counter", 1018, 2000); // change value to your score

// ===============================
// 🎓 Education stagger animation
// ===============================
const eduBoxes = document.querySelectorAll(".edu-box");
const eduObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      eduBoxes.forEach((box, index) => {
        setTimeout(() => box.classList.add("animate"), index * 300);
      });
    }
  });
}, { threshold: 0.5 });
eduBoxes.forEach(box => eduObserver.observe(box));

// ===============================
// 🎨 Hobbies toggle blur
// ===============================
document.querySelectorAll(".hobby-img").forEach(img => {
  img.addEventListener("click", () => img.classList.toggle("clear"));
});

// ===============================
// 📂 Projects table animation
// ===============================
const projectsTable = document.getElementById("projectsTable");
if (projectsTable) {
  const rows = projectsTable.querySelectorAll("tbody tr");
  const tableObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rows.forEach((row, index) => {
          setTimeout(() => row.classList.add("visible"), index * 200);
        });
        tableObserver.unobserve(projectsTable); // only once
      }
    });
  }, { threshold: 0.2 });
  tableObserver.observe(projectsTable);
}

// ===============================
// 💻 Technical Skills pop-up
// ===============================
const popupObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".skill-box").forEach(box => {
  popupObserver.observe(box);
});
