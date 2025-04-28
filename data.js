// Datos de las categorias y sus enlaces
const categorias = {
  ingenieria: [
    { name: "Ingeniería en Telecomunicaciones", url: "https://universidad.edu/telecomunicaciones", icon: "fa-satellite-dish" },
    { name: "Laboratorio de Telecomunicaciones", url: "https://laboratorios.universidad.edu/telecomunicaciones", icon: "fa-network-wired" },
    { name: "Plan de Estudios", url: "https://universidad.edu/programas/telecomunicaciones", icon: "fa-book" },
    { name: "Eventos", url: "https://universidad.edu/eventos/telecomunicaciones", icon: "fa-calendar" },
    { name: "Noticias", url: "https://universidad.edu/noticias/telecomunicaciones", icon: "fa-newspaper" },
    { name: "Admisión", url: "https://universidad.edu/admisión/telecomunicaciones", icon: "fa-user-plus" },
    { name: "Biblioteca", url: "https://biblioteca.universidad.edu/telecomunicaciones", icon: "fa-book-open" },
    { name: "Alumni", url: "https://alumni.universidad.edu/telecomunicaciones", icon: "fa-graduation-cap" },
    { name: "Contactos", url: "https://universidad.edu/contactos", icon: "fa-envelope" },
  ],
  sistemas: [
    { name: "Sistemas Computacionales", url: "https://universidad.edu/sistemas", icon: "fa-laptop-code" },
    { name: "Laboratorio de Sistemas", url: "https://laboratorios.universidad.edu/sistemas", icon: "fa-terminal" },
    { name: "Programas de Sistemas", url: "https://universidad.edu/programas/sistemas", icon: "fa-code" },
    { name: "Eventos Sistemas", url: "https://universidad.edu/eventos/sistemas", icon: "fa-calendar" },
    { name: "Noticias Sistemas", url: "https://universidad.edu/noticias/sistemas", icon: "fa-newspaper" },
    { name: "Admisión Sistemas", url: "https://universidad.edu/admisión/sistemas", icon: "fa-user-plus" },
    { name: "Biblioteca Sistemas", url: "https://biblioteca.universidad.edu/sistemas", icon: "fa-book" },
    { name: "Alumni Sistemas", url: "https://alumni.universidad.edu/sistemas", icon: "fa-graduation-cap" },
    { name: "Contactos", url: "https://universidad.edu/contactos", icon: "fa-envelope" },
  ],
  medicina: [
    { name: "Medicina", url: "https://universidad.edu/medicina", icon: "fa-stethoscope" },
    { name: "Hospital Universitario", url: "https://hospital.universidad.edu/medicina", icon: "fa-hospital" },
    { name: "Programas de Medicina", url: "https://universidad.edu/programas/medicina", icon: "fa-user-md" },
    { name: "Eventos Medicina", url: "https://universidad.edu/eventos/medicina", icon: "fa-calendar" },
    { name: "Noticias Medicina", url: "https://universidad.edu/noticias/medicina", icon: "fa-newspaper" },
    { name: "Admisión Medicina", url: "https://universidad.edu/admisión/medicina", icon: "fa-user-plus" },
    { name: "Biblioteca Medicina", url: "https://biblioteca.universidad.edu/medicina", icon: "fa-book" },
    { name: "Alumni Medicina", url: "https://alumni.universidad.edu/medicina", icon: "fa-graduation-cap" },
    { name: "Contactos", url: "https://universidad.edu/contactos", icon: "fa-envelope" },
  ],
  derecho: [
    { name: "Derecho", url: "https://universidad.edu/derecho", icon: "fa-gavel" },
    { name: "Biblioteca Derecho", url: "https://biblioteca.universidad.edu/derecho", icon: "fa-book-open" },
    { name: "Programas de Derecho", url: "https://universidad.edu/programas/derecho", icon: "fa-balance-scale" },
    { name: "Eventos Derecho", url: "https://universidad.edu/eventos/derecho", icon: "fa-calendar" },
    { name: "Noticias Derecho", url: "https://universidad.edu/noticias/derecho", icon: "fa-newspaper" },
    { name: "Admisión Derecho", url: "https://universidad.edu/admisión/derecho", icon: "fa-user-plus" },
    { name: "Clínicas de Derecho", url: "https://clincas.universidad.edu/derecho", icon: "fa-handshake" },
    { name: "Alumni Derecho", url: "https://alumni.universidad.edu/derecho", icon: "fa-graduation-cap" },
    { name: "Contactos", url: "https://universidad.edu/contactos", icon: "fa-envelope" },
  ],
  administracion: [
    { name: "Administración", url: "https://universidad.edu/administracion", icon: "fa-briefcase" },
    { name: "Laboratorio de Administración", url: "https://laboratorios.universidad.edu/administracion", icon: "fa-building" },
    { name: "Programas de Administración", url: "https://universidad.edu/programas/administracion", icon: "fa-chart-line" },
    { name: "Eventos Administración", url: "https://universidad.edu/eventos/administracion", icon: "fa-calendar" },
    { name: "Noticias Administración", url: "https://universidad.edu/noticias/administracion", icon: "fa-newspaper" },
    { name: "Admisión Administración", url: "https://universidad.edu/admisión/administracion", icon: "fa-user-plus" },
    { name: "Biblioteca Administración", url: "https://biblioteca.universidad.edu/administracion", icon: "fa-book" },
    { name: "Alumni Administración", url: "https://alumni.universidad.edu/administracion", icon: "fa-graduation-cap" },
    { name: "Contactos", url: "https://universidad.edu/contactos", icon: "fa-envelope" },
  ],
};

// Datos de las apps estilo Google
const apps = [
  { name: "Gmail", icon: "fas fa-envelope", url: "https://mail.google.com/" },
  { name: "YouTube", icon: "fab fa-youtube", url: "https://www.youtube.com/" },
  { name: "Drive", icon: "fab fa-google-drive", url: "https://drive.google.com/" },
  // { name: "Docs", icon: "fas fa-file-lines", url: "https://docs.google.com/" },
  // { name: "Sheets", icon: "fas fa-table", url: "https://sheets.google.com/" },
  // { name: "Slides", icon: "fab fa-slideshare", url: "https://slides.google.com/" },
  { name: "Calendar", icon: "fas fa-calendar-alt", url: "https://calendar.google.com/" },
];

// Datos de enlaces para la ventana popup similar a Google
const enlacesGoogle = [
  { name: "Universidad San Agustín", icon: "fas fa-university", url: "https://www.unsa.edu.pe" },
  { name: "Portal Académico", icon: "fas fa-graduation-cap", url: "https://academico.unsa.edu.pe" },
  { name: "Correo UNSA", icon: "fas fa-envelope", url: "http://mail.unsa.edu.pe/" },
  { name: "YouTube", icon: "fab fa-youtube", url: "https://www.youtube.com/" },
  { name: "Google Drive", icon: "fab fa-google-drive", url: "https://drive.google.com/" },
  { name: "Documentos de Google", icon: "fas fa-file-lines", url: "https://docs.google.com/" },
  { name: "Diapositivas de Google", icon: "fab fa-slideshare", url: "https://slides.google.com/" },
  { name: "Hojas de Cálculo de Google", icon: "fas fa-table", url: "https://sheets.google.com/" },
];