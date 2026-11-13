const btnTema = document.getElementById("btn-tema");
const buscador = document.getElementById("buscador");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const tarjetas = document.querySelectorAll(".tarjeta");
const mensajeVacio = document.getElementById("mensaje-vacio");

let categoriaActual = "todos";

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  
  if (document.body.classList.contains("oscuro")) {
    btnTema.textContent = "☀️ Modo Claro";
  } else {
    btnTema.textContent = "🌙 Modo Oscuro";
  }
});

function filtrarTrabajos() {
  const textoBuscado = buscador.value.toLowerCase();
  let visibles = 0;

  tarjetas.forEach((tarjeta) => {
    const categoriaTarjeta = tarjeta.getAttribute("data-categoria");
    const contenidoTarjeta = tarjeta.textContent.toLowerCase();
    const coincideCategoria = categoriaActual === "todos" || categoriaTarjeta === categoriaActual;
    const coincideTexto = contenidoTarjeta.includes(textoBuscado);

    if (coincideCategoria && coincideTexto) {
      tarjeta.classList.remove("oculto");
      visibles++;
    } else {
      tarjeta.classList.add("oculto");
    }
  });

  if (visibles === 0) {
    mensajeVacio.classList.remove("oculto");
  } else {
    mensajeVacio.classList.add("oculto");
  }
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((btn) => btn.classList.remove("activo"));
    boton.classList.add("activo");

    categoriaActual = boton.getAttribute("data-categoria");
    filtrarTrabajos();
  });
});

buscador.addEventListener("input", filtrarTrabajos);