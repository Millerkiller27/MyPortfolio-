// Animated Subtitles cycling

const subtitles = [
  "Infrastructure Security",
  "Cloud Security",
  "Detection Engineering",
  "Event Manager",
  "Photographer",
];

let subtitleIndex = 0;
const subtitleElement = document.getElementById("animated-subtitle");

function cycleSubtitles() {
  subtitleElement.style.opacity = 0;
  setTimeout(() => {
    subtitleElement.textContent = subtitles[subtitleIndex];
    subtitleElement.style.opacity = 1;
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
  }, 600);
}

window.addEventListener("DOMContentLoaded", () => {
  subtitleElement.textContent = subtitles[0];
  setInterval(cycleSubtitles, 3000);

  // Contact Form Submission
  const form = document.getElementById("contactForm");
  const messageEl = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple form validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = "Please fill in all fields.";
      messageEl.style.color = "#ff4d4d";
      return;
    }
    // A simple email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      messageEl.textContent = "Please enter a valid email.";
      messageEl.style.color = "#ff4d4d";
      return;
    }

    // Simulate sending message (replace with your own email API)
    messageEl.textContent = "Sending message...";
    messageEl.style.color = "#00ffa2";

    setTimeout(() => {
      messageEl.textContent = "Message sent! Thank you for reaching out.";
      form.reset();
    }, 1500);
  });

  // Light/Dark Mode Toggle
  const toggle = document.getElementById('modeToggle');
  if (localStorage.getItem('mode') === 'light') {
    document.body.classList.add('light-mode');
    toggle.checked = true;
  }
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('mode', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('mode', 'dark');
    }
  });
});

