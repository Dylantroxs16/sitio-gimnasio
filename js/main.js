// --- 1. MENÚ HAMBURGUESA ---
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".menu");

if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    btnMenu.classList.toggle("activo"); // anima las rayitas
  });

  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll(".menu a").forEach(enlace => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("abierto");
      btnMenu.classList.remove("activo");
    });
  });
}


// --- 2. ACORDEÓN INTERACTIVO CON JAVASCRIPT ---
const titulosAccordion = document.querySelectorAll(".accordion .titulo");

titulosAccordion.forEach(titulo => {
  titulo.addEventListener("click", () => {
    const item = titulo.parentElement;

    // Cierra los demás acordeones abiertos
    document.querySelectorAll(".accordion .item").forEach(otro => {
      if (otro !== item) otro.classList.remove("activo");
    });

    // Alterna el estado del acordeón actual
    item.classList.toggle("activo");
  });
});


// --- 3. GENERACIÓN DINÁMICA DE TARJETAS (POWERFIT GYM) ---
const servicios = [
  { titulo: "Musculación y Pesas", desc: "Equipamiento de alta gama para hipertrofia y fuerza con zona de pesos libres.", img: "img/servicio-1.jpg" },
  { titulo: "CrossFit y Funcional", desc: "Entrenamientos de alta intensidad diseñados para mejorar tu resistencia y agilidad.", img: "img/servicio-2.jpg" },
  { titulo: "Spinning / Ciclismo", desc: "Clases grupales dinámicas orientadas a quemar calorías y fortalecer el sistema cardiovascular.", img: "img/servicio-3.jpg" },
  { titulo: "Yoga y Pilates", desc: "Mejora tu flexibilidad, postura y concentración en un ambiente relajante.", img: "img/servicio-4.jpg" },
  { titulo: "Asesoría Personalizada", desc: "Rutinas adaptadas a tus objetivos individuales guiadas por entrenadores expertos.", img: "img/servicio-5.jpg" },
  { titulo: "Nutrición Deportiva", desc: "Planes de alimentación orientados a optimizar tu rendimiento y resultados físicos.", img: "img/servicio-6.jpg" }
];

const contenedorCards = document.querySelector("#cards");

function pintarCards(lista) {
  contenedorCards.innerHTML = ""; // Limpiar antes de dibujar
  lista.forEach(item => {
    const article = document.createElement("article");
    article.classList.add("tarjeta");
    article.innerHTML = `
      <img src="${item.img}" alt="${item.titulo}">
      <h3>${item.titulo}</h3>
      <p>${item.desc}</p>
      <a href="#" class="boton">Ver más</a>
    `;
    contenedorCards.appendChild(article);
  });
}

if (contenedorCards) pintarCards(servicios); // Se ejecuta solo si existe el contenedor en la página


// --- 4. VALIDACIÓN DE FORMULARIO ---
const form = document.querySelector(".formulario");

if (form) {
  form.addEventListener("submit", (e) => {
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    let errores = [];

    if (nombre === "") {
      errores.push("El nombre es obligatorio.");
    }
    if (!correo.includes("@")) {
      errores.push("El correo no es válido.");
    }

    if (errores.length > 0) {
      e.preventDefault(); // Detiene el envío si hay errores
      const mensajeDiv = document.querySelector("#mensajes");
      if (mensajeDiv) {
        mensajeDiv.textContent = errores.join(" ");
      }
    }
  });
}