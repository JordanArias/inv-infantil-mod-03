/**
 * ==========================================================================
 * RSVP.JS - CONFIRMACIÓN DE ASISTENCIA CON SELECTOR SÍ/NO + WHATSAPP
 * INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.getElementById("rsvp-form");
  const btnYes = document.getElementById("btn-attend-yes");
  const btnNo = document.getElementById("btn-attend-no");
  const attendanceInput = document.getElementById("attendance-value");
  const guestCountGroup = document.getElementById("guests-number-container");
  const guestCountInput = document.getElementById("guest-count");
  const nameInput = document.getElementById("guest-name");
  const messageInput = document.getElementById("guest-message");
  const toast = document.getElementById("copy-toast");
  const successMsg = document.getElementById("rsvp-success-msg");

  function setAttendance(isAttending) {
    if (!attendanceInput || !btnYes || !btnNo) return;

    if (isAttending) {
      attendanceInput.value = "si";
      btnYes.classList.add("is-active");
      btnNo.classList.remove("is-active");
      if (guestCountGroup) {
        guestCountGroup.style.display = "flex";
      }
    } else {
      attendanceInput.value = "no";
      btnNo.classList.add("is-active");
      btnYes.classList.remove("is-active");
      if (guestCountGroup) {
        guestCountGroup.style.display = "none";
      }
    }
  }

  if (btnYes) {
    btnYes.addEventListener("click", () => setAttendance(true));
  }

  if (btnNo) {
    btnNo.addEventListener("click", () => setAttendance(false));
  }

  function sendWhatsAppConfirmation(e) {
    if (e) e.preventDefault();

    const config = window.INVITATION_CONFIG || {};
    const phone = config.whatsapp?.telefono || "";
    const kidName = config.festejada?.nombre || "Sofía";

    const guestName = nameInput ? nameInput.value.trim() : "";
    const attendVal = attendanceInput ? attendanceInput.value : "si";
    const guestCount = guestCountInput ? guestCountInput.value.trim() : "1";
    const customMsg = messageInput ? messageInput.value.trim() : "";

    const isAttending = attendVal !== "no";
    const attendingText = isAttending
      ? "¡Sí, ahí estaré! 🧸🎉"
      : "Lo siento, no podré asistir 😢";

    let fullMessage = `🧸 *CONFIRMACIÓN - 1ER AÑITO DE ${kidName.toUpperCase()}* 🎈\n\n`;
    if (guestName) {
      fullMessage += `👤 *Nombre:* ${guestName}\n`;
    }
    fullMessage += `✨ *¿Asistirás?:* ${attendingText}\n`;
    if (isAttending && guestCount) {
      fullMessage += `👨‍👩‍👧 *Cantidad de asistentes:* ${guestCount}\n`;
    }
    if (customMsg) {
      fullMessage += `💌 *Mensaje:* ${customMsg}\n`;
    }

    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(30);
      } catch (_) {}
    }

    if (successMsg) {
      successMsg.textContent = guestName
        ? `¡Gracias, ${guestName}! Abriendo WhatsApp para enviar tu confirmación...`
        : "¡Gracias! Abriendo WhatsApp para enviar tu confirmación...";
      successMsg.classList.remove("hidden");
      setTimeout(() => {
        successMsg.classList.add("hidden");
      }, 5000);
    }

    if (toast) {
      toast.textContent = "🧸 ¡Abriendo WhatsApp para confirmar!";
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2800);
    }

    const baseWa = phone ? `https://wa.me/${phone}` : "https://wa.me/";
    const url = `${baseWa}?text=${encodeURIComponent(fullMessage)}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 350);
  }

  if (formEl) {
    formEl.addEventListener("submit", sendWhatsAppConfirmation);
  }
});
