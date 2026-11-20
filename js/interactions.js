/**
 * ==========================================================================
 * INTERACTIONS.JS - ENLACES DE UBICACIÓN, MAPA Y NAVEGACIÓN SUAVE
 * INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.INVITATION_CONFIG;
  if (!config) return;

  const mapLinks = document.querySelectorAll(
    "#venue-map-card, #quick-map-link"
  );
  mapLinks.forEach((link) => {
    if (link && config.lugar?.mapsUrl) {
      link.href = config.lugar.mapsUrl;
    }
  });
});
