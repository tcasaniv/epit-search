// Gestión del menú principal y menús secundarios

// Mostrar enlaces según el categoria seleccionado
function mostrarEnlaces(categoria) {
    const enlaces = categorias[categoria] || [];
    const contenedor = getElement("menu");
    contenedor.innerHTML = '';
  
    enlaces.forEach(enlace => {
      const innerHTML = `<i class="fas ${enlace.icon}"></i>
                        <span>${enlace.name}</span>`;
      const link = createLink(enlace.url, "menu-item", innerHTML);
      contenedor.appendChild(link);
    });
  }
  
  // Mostrar apps en la barra superior
  function mostrarApps() {
    const contenedorApps = getElement("appsMenu");
    contenedorApps.innerHTML = "";
    
    apps.forEach(app => {
      const div = createElementWithClass('div', 'app-icon');
      div.title = app.name;
      div.innerHTML = `<a href="${app.url}" target="_blank" style="text-decoration:none; color:inherit;">
                       <i class="${app.icon}"></i>
                     </a>`;
      contenedorApps.appendChild(div);
    });
  }
  
  // Manejar el cambio de categoria
  function handleCategoriaChange() {
    const value = getElement("categoriaSelect").value;
    saveToStorage(STORAGE_KEY, value);
    mostrarEnlaces(value);
  }
  
  // Inicializar menú de enlaces Google
  function initGoogleLinksMenu() {
    const menuPuntos = getElement('menuPuntos');
    const dots = getElement('dots');
    const menuDropdown = getElement('menuDropdown');
    const enlacesGoogleUl = getElement('enlacesGoogle');
    
    // Crear ítems en la lista de enlaces
    enlacesGoogleUl.innerHTML = "";
    enlacesGoogle.forEach(enlace => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="${enlace.icon}"></i> ${enlace.name}`;
      li.onclick = () => {
        window.open(enlace.url, '_blank');
        closeMenu();
      };
      enlacesGoogleUl.appendChild(li);
    });
  
    // Función para mostrar u ocultar el dropdown
    function toggleMenu() {
      const isVisible = window.getComputedStyle(menuDropdown).display === 'block';
      if (isVisible) {
        closeMenu();
      } else {
        menuDropdown.style.display = 'block';
        dots.setAttribute('aria-expanded', 'true');
        menuDropdown.setAttribute('aria-hidden', 'false');
      }
    }
  
    // Función para cerrar el menú
    function closeMenu() {
      menuDropdown.style.display = 'none';
      dots.setAttribute('aria-expanded', 'false');
      menuDropdown.setAttribute('aria-hidden', 'true');
    }
  
    // Evento para abrir/cerrar el menú
    dots.addEventListener('click', toggleMenu);
    dots.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  
    // Cerrar el menú si clic fuera
    document.addEventListener('click', function(e) {
      if (!menuPuntos.contains(e.target)) {
        closeMenu();
      }
    });
  
    // Hacer función accesible para otros módulos
    window.closeMenu = closeMenu;
  }