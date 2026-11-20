/**
 * ==========================================================================
 * GALLERY.JS - VISOR LIGHTBOX PARA LA FOTO DEL SOBRE
 * INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const clickablePhotos = document.querySelectorAll(".envelope-photo-trigger");

  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Sofía - Mi primer añito";
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  clickablePhotos.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const mainImg = document.querySelector(".baby-envelope-photo");
      if (mainImg) {
        openLightbox(mainImg.src, mainImg.alt);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
});
