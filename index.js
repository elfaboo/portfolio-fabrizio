const textos = [
  "desarrollador Fullstack",
  "diseñador web",
  "desarrollador de aplicaciones"
];

let indiceTexto = 0;
let indiceLetra = 0;
let borrando = false;

const elemento = document.querySelector(".typewriter");

function typeEffect() {
    const textoActual = textos[indiceTexto];

    if (!borrando) {
        elemento.textContent = textoActual.slice(0, indiceLetra++);
        if (indiceLetra > textoActual.length) {
            borrando = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        elemento.textContent = textoActual.slice(0, indiceLetra--);
        if (indiceLetra < 0) {
            borrando = false;
            indiceTexto = (indiceTexto + 1) % textos.length;
            indiceLetra = 0;
        }
    }

    setTimeout(typeEffect, borrando ? 70 : 100);
}

typeEffect();

const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");

btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("activo");
});