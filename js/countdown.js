/**
 * ==========================================================================
 * COUNTDOWN.JS - CUENTA REGRESIVA EN VIVO (DÍAS : HORAS : MIN : SEG)
 * INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const configDate =
    window.INVITATION_CONFIG?.fecha?.fechaHoraISO || "2026-11-24T18:00:00";
  const targetDate = new Date(configDate);

  const daysEl =
    document.getElementById("countdown-days") || document.getElementById("days");
  const hoursEl =
    document.getElementById("countdown-hours") || document.getElementById("hours");
  const minutesEl =
    document.getElementById("countdown-minutes") || document.getElementById("minutes");
  const secondsEl =
    document.getElementById("countdown-seconds") || document.getElementById("seconds");

  let intervalId = null;

  function updateCountdown() {
    const now = new Date();
    let diff = targetDate.getTime() - now.getTime();

    // Si la fecha ya llegó o pasó, quedar en 0 sin reiniciar
    if (diff <= 0) {
      diff = 0;
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad2 = (n) => String(n).padStart(2, "0");

    if (daysEl) daysEl.textContent = days >= 100 ? String(days) : pad2(days);
    if (hoursEl) hoursEl.textContent = pad2(hours);
    if (minutesEl) minutesEl.textContent = pad2(minutes);
    if (secondsEl) secondsEl.textContent = pad2(seconds);
  }

  updateCountdown();
  if (targetDate.getTime() > Date.now()) {
    intervalId = setInterval(updateCountdown, 1000);
  }
});
