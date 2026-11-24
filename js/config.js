/**
 * ==========================================================================
 * CONFIGURACIÓN CENTRALIZADA - INVITACIÓN INFANTIL VINTAGE TEDDY BEAR
 * ==========================================================================
 * Este archivo centraliza todos los datos editables de la invitación.
 * Puedes actualizar nombre, fecha, hora, salón, papás, WhatsApp y música
 * directamente desde aquí.
 */

const INVITATION_CONFIG = {
  festejada: {
    nombre: "Sofía",
    tituloHonor: "¡Sofía cumple 1 añito!",
    edadTexto: "¡Mi primer añito!",
    subtituloInvitacion: "¡Acompáñanos a celebrar!",
    fraseCierre: "¡No podemos esperar para celebrar contigo!",
    monograma: "S",
    fechaCorta: "24.11.2026"
  },
  fecha: {
    diaSemana: "Martes",
    diaNumero: 24,
    mesNombre: "Noviembre",
    mesCorto: "NOVIEMBRE",
    mesNumero: 11,
    anio: 2026,
    fechaTexto: "24 de Noviembre de 2026",
    fechaLimiteRsvp: "antes del 20 de Noviembre",
    horaTexto: "18:00",
    periodoTexto: "HRS",
    // Fecha y hora en formato ISO para la cuenta regresiva en vivo
    fechaHoraISO: "2026-11-24T18:00:00",
    fechaFinISO: "2026-11-24T23:00:00"
  },
  lugar: {
    titulo: "Lugar",
    nombreSalon: "Salón Jardín Las Estrellas",
    ciudad: "Recepción Principal",
    direccion: "Av. Principal 123, Salón Jardín Las Estrellas",
    mapsUrl: "https://maps.google.com/?q=Salon+Jardin+Las+Estrellas"
  },
  papas: {
    etiqueta: "Con el cariño de mis papás:",
    nombres: "Carla Morales y Diego Vargas"
  },
  whatsapp: {
    telefono: "", // Coloca aquí el número con código de país (ej. "59170000000" o "5215512345678")
    mensajePredefinido: "¡Hola! Confirmo con mucha alegría mi asistencia al primer añito de Sofía 🧸🎈"
  },
  musica: {
    archivo: "music/cancion_boda.mp3",
    titulo: "Melodía Especial - Sofía"
  }
};

if (typeof window !== "undefined") {
  window.INVITATION_CONFIG = INVITATION_CONFIG;
  window.WEDDING_CONFIG = INVITATION_CONFIG;
}
