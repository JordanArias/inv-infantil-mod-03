/**
 * ==========================================================================
 * MUSIC.JS - REPRODUCTOR SINCRONIZADO (DISCO DE VINILO + BOTÓN FLOTANTE)
 * INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("floating-music-btn");
  const audio = document.getElementById("wedding-music");
  const vinylDisc = document.getElementById("vinyl-disc");
  const vinylBtn = document.getElementById("audio-toggle-btn");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const audioStatus = document.getElementById("audio-status");

  if (!audio) return;

  audio.volume = 0.75;

  function syncMusicUI(isPlaying) {
    // 1. Botón flotante
    if (musicBtn) {
      if (isPlaying) {
        musicBtn.classList.remove("is-paused");
        musicBtn.classList.add("is-playing");
        musicBtn.setAttribute("title", "Pausar música");
        musicBtn.setAttribute("aria-label", "Pausar música");
      } else {
        musicBtn.classList.remove("is-playing");
        musicBtn.classList.add("is-paused");
        musicBtn.setAttribute("title", "Reproducir música");
        musicBtn.setAttribute("aria-label", "Reproducir música");
      }
    }

    // 2. Disco de vinilo giratorio en la tarjeta "Un Mensaje Especial"
    if (vinylDisc) {
      if (isPlaying) {
        vinylDisc.classList.remove("paused");
        vinylDisc.classList.add("is-spinning");
      } else {
        vinylDisc.classList.add("paused");
        vinylDisc.classList.remove("is-spinning");
      }
    }

    // 3. Iconos Play/Pause y texto de estado en la tarjeta de vinilo
    if (playIcon && pauseIcon) {
      if (isPlaying) {
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
      } else {
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
      }
    }

    if (audioStatus) {
      audioStatus.textContent = isPlaying
        ? "Reproduciendo melodía..."
        : "Toca para escuchar";
    }
  }

  function toggleAudio(e) {
    if (e) e.stopPropagation();
    if (audio.paused) {
      audio
        .play()
        .then(() => syncMusicUI(true))
        .catch((err) => console.log("Error al reproducir audio:", err));
    } else {
      audio.pause();
      syncMusicUI(false);
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", toggleAudio);
  }

  if (vinylBtn) {
    vinylBtn.addEventListener("click", toggleAudio);
  }

  if (vinylDisc) {
    vinylDisc.addEventListener("click", toggleAudio);
  }

  audio.addEventListener("play", () => syncMusicUI(true));
  audio.addEventListener("pause", () => syncMusicUI(false));
});
