// Funcionalidad de búsqueda

function initSearch() {
    const searchBtn = getElement('searchBtn');
    const searchModal = getElement('searchModal');
    const searchBox = getElement('searchBox');
    const searchInputModal = getElement('searchInputModal');
    const searchInput = getElement('searchInput');
    const searchButton = getElement('searchButton');
    const searchButtonModal = getElement('searchButtonModal');
  
    // Función para realizar búsqueda
    function performSearch(inputElement) {
      const query = inputElement.value.trim();
      if (!query) return;
      
      const engine = getElement('searchEngine').value;
      window.open(engine + encodeURIComponent(query), '_blank');
      
      if (searchModal.classList.contains('show')) {
        cerrarBusqueda();
      }
    }
  
    // Función para abrir el modal con animate zoom
    function abrirBusqueda() {
      searchModal.classList.add('show');
      searchModal.style.display = 'flex';
      
      // Añadir animación de zoom
      searchBox.classList.remove('animate-zoom');
      // Forzar reflow para que la animación se aplique
      void searchBox.offsetWidth;
      searchBox.classList.add('animate-zoom');
      
      // Colocar cursor en input
      searchInputModal.focus();
    }
  
    // Función para cerrar el modal
    function cerrarBusqueda() {
      searchModal.classList.remove('show');
      // Opcional: después de la transición esconder
      setTimeout(() => {
        searchModal.style.display = 'none';
      }, 300);
    }
  
    // Eventos
    searchBtn.addEventListener('click', abrirBusqueda);
    
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        cerrarBusqueda();
      }
    });
    
    // Botón principal de búsqueda
    searchButton.addEventListener('click', () => {
      performSearch(searchInput);
    });
    
    // Botón de búsqueda en modal
    searchButtonModal.addEventListener('click', () => {
      performSearch(searchInputModal);
    });
    
    // Enter en inputs de búsqueda
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(searchInput);
      }
    });
    
    searchInputModal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(searchInputModal);
      }
    });
  
    // Hacer funciones accesibles para otros módulos
    window.abrirBusqueda = abrirBusqueda;
    window.cerrarBusqueda = cerrarBusqueda;
  }