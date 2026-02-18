// Target Release Date
const targetDate = new Date("December 18, 2026 00:00:00");
const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-btn");

function updateCountdown() {
  const now = new Date();
  
  if (now >= targetDate) {
    clearInterval(timerInterval);
    document.querySelector(".container").innerHTML = "<h1 class='title'>AP HAS RETURNED</h1>";
    return;
  }

  // Month and Day Math
  let months = (targetDate.getFullYear() - now.getFullYear()) * 12 + (targetDate.getMonth() - now.getMonth());
  let tempDate = new Date(now);
  tempDate.setMonth(now.getMonth() + months);

  if (tempDate > targetDate) {
    months--;
    tempDate = new Date(now);
    tempDate.setMonth(now.getMonth() + months);
  }

  let diff = targetDate - tempDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Inject into HTML
  document.getElementById("months").innerText = months.toString().padStart(2, '0');
  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Sound Toggle for Video Audio
soundBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    soundBtn.innerText = "Sound ON";
    soundBtn.style.color = "#10b981"; // Optional: Green glow when active
    soundBtn.style.borderColor = "#10b981";
  } else {
    video.muted = true;
    soundBtn.innerText = "Sound OFF";
    soundBtn.style.color = "#ffffff";
    soundBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
  }
});