// Archivo principal que inicializa todos los componentes

// Función de inicialización principal
function initApp() {
    // Inicializar selector de categorias
    const categoriaSeleccionada = initCategoriaSelector();
    
    // Mostrar enlaces del categoria seleccionado
    mostrarEnlaces(categoriaSeleccionada);
    
    // Mostrar apps en el menú superior
    mostrarApps();
    
    // Inicializar menú de enlaces de Google
    initGoogleLinksMenu();
    
    // Inicializar funcionalidad de búsqueda
    initSearch();
    
    // Configurar listeners de eventos
    setupEventListeners();
  }
  
  // Configurar listeners de eventos
  function setupEventListeners() {
    // Listener para cambio de categoria
    getElement("categoriasSelect").addEventListener("change", handleCategoriaChange);
    
    // Manejar teclas de accesibilidad
    document.addEventListener('keydown', (e) => {
      // Presionar Escape para cerrar modal de búsqueda
      if (e.key === 'Escape' && getElement('searchModal').classList.contains('show')) {
        cerrarBusqueda();
      }
      
      // Atajo de teclado Alt+S para abrir búsqueda
      if (e.key === 's' && e.altKey) {
        e.preventDefault();
        abrirBusqueda();
      }
    });
  }
  
  // Iniciar aplicación cuando el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', initApp);