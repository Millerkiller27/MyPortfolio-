/* ========== Dynamic Subtitle ========== */
const subtitles = [
  "Infrastructure Security",
  "Cloud Security",
  "Detection Engineering",
  "Event Manager",
  "Photographer",
];
let subIdx = 0;
const subEl = document.getElementById("animated-subtitle");
function cycleSubtitles(){
  subEl.style.opacity = 0;
  setTimeout(()=>{
    subEl.textContent = subtitles[subIdx];
    subEl.style.opacity = 1;
    subIdx = (subIdx + 1) % subtitles.length;
  },600);
}
window.addEventListener("DOMContentLoaded",()=>{
  subEl.textContent = subtitles[0];
  setInterval(cycleSubtitles, 3000);

  /* ===== Contact Form (simple mock) ===== */
  const form       = document.getElementById("contactForm");
  const messageEl  = document.getElementById("formMessage");
  form.addEventListener("submit", e=>{
    e.preventDefault();
    const { name, email, message } = form;
    if(!name.value || !email.value || !message.value){
      messageEl.textContent = "Please fill in all fields.";
      messageEl.style.color = "#ff4d4d";
      return;
    }
    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!pattern.test(email.value)){
      messageEl.textContent = "Please enter a valid email.";
      messageEl.style.color = "#ff4d4d";
      return;
    }
    messageEl.textContent = "Sending message...";
    messageEl.style.color = "#00ffa2";
    setTimeout(()=>{
      messageEl.textContent = "Message sent! Thank you.";
      form.reset();
    },1500);
  });

  /* ===== Theme Toggle ===== */
  const toggle = document.getElementById("themeToggle");
  if(localStorage.getItem("theme")==="alt"){
    document.body.classList.add("alt-theme");
    toggle.checked = true;
  }
  toggle.addEventListener("change",()=>{
    if(toggle.checked){
      document.body.classList.add("alt-theme");
      localStorage.setItem("theme","alt");
    }else{
      document.body.classList.remove("alt-theme");
      localStorage.setItem("theme","dark");
    }
  });
});

