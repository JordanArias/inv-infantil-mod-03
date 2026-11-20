/**
 * ==========================================================================
 * ENVELOPE.JS - APERTURA SUAVE Y CINEMÁTICA DE LA PORTADA / SOBRE INICIAL
 * INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const envelopeScreen = document.getElementById("envelope-screen");
  const openBtn = document.getElementById("open-envelope-btn");
  const waxSeal = document.getElementById("wax-seal-action");
  const envelopeVisual = document.getElementById("envelope-visual");

  let isOpened = false;

  const handleOpen = (e) => {
    if (e) e.stopPropagation();
    if (isOpened) return;
    isOpened = true;

    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(35);
      } catch (_) {}
    }

    if (envelopeScreen) {
      envelopeScreen.classList.add("is-opening");
      envelopeScreen.style.pointerEvents = "none";

      setTimeout(() => {
        envelopeScreen.style.transition =
          "opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1), filter 1.6s cubic-bezier(0.16, 1, 0.3, 1)";
        envelopeScreen.style.filter = "blur(10px)";
        envelopeScreen.style.opacity = "0";
        envelopeScreen.style.transform = "scale(1.03)";

        window.dispatchEvent(new CustomEvent("envelopeOpened"));
      }, 650);

      setTimeout(() => {
        envelopeScreen.classList.add("hidden");
      }, 2250);
    }

    // Disparar reproducción de música con el gesto del usuario
    const audio = document.getElementById("wedding-music");
    if (audio && audio.paused) {
      audio.play().catch((err) => {
        console.log("Audio en espera de interacción adicional:", err);
      });
    }
  };

  if (openBtn) {
    openBtn.addEventListener("click", handleOpen);
  }

  if (waxSeal) {
    waxSeal.addEventListener("click", handleOpen);
  }

  if (envelopeVisual) {
    envelopeVisual.addEventListener("click", handleOpen);
    envelopeVisual.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpen(e);
      }
    });
  }
});
