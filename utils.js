// Constantes
const STORAGE_KEY = "categoriaSeleccionada";

// Funciones de utilidad 
function getElement(id) {
  return document.getElementById(id);
}

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  if (className) element.className = className;
  return element;
}

function createLink(href, className, innerHTML, target = "_blank") {
  const a = document.createElement('a');
  a.href = href;
  a.className = className;
  a.innerHTML = innerHTML;
  a.target = target;
  return a;
}

function loadFromStorage(key, defaultValue) {
  const value = localStorage.getItem(key);
  return value !== null ? value : defaultValue;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

// Inicializar el selector de categorias
function initCategoriaSelector() {
  const select = getElement('categoriasSelect');
  select.innerHTML = ''; // Limpiar opciones existentes
  
  Object.keys(categorias).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    select.appendChild(option);
  });
  
  // Cargar categoria guardado o usar el primero como predeterminado
  const savedCategoria = loadFromStorage(STORAGE_KEY, Object.keys(categorias)[0]);
  select.value = savedCategoria;
  
  return savedCategoria;
}