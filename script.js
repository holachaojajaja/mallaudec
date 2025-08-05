const plan = [
  {
    semestre: 1,
    ramos: [
      "Psicología Social",
      "Biología Celular Básica",
      "Anatomía General",
      "Física General",
      "Introducción a la Fonoaudiología"
    ]
  },
  {
    semestre: 2,
    ramos: [
      { nombre: "Fisiología Humana", prereqs: ["Biología Celular Básica", "Anatomía General"] },
      { nombre: "Neuroanatomía", prereqs: ["Anatomía General"] },
      { nombre: "Psicología del Desarrollo", prereqs: ["Psicología Social"] },
      { nombre: "Audiología Básica", prereqs: ["Física General"] },
      { nombre: "Fonética y Fonología General", prereqs: ["Introducción a la Fonoaudiología"] }
    ]
  }
];

const estado = JSON.parse(localStorage.getItem("estadoAprobado")) || {};

function guardarEstado() {
  localStorage.setItem("estadoAprobado", JSON.stringify(estado));
}

function puedeInscribir(ramo) {
  if (!ramo.prereqs) return true;
  return ramo.prereqs.every(pr => estado[pr]);
}

function render() {
  const contenedor = document.getElementById("plan-container");
  contenedor.innerHTML = "";

  plan.forEach(bloque => {
    const div = document.createElement("div");
    div.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${bloque.semestre}`;
    div.appendChild(titulo);

    bloque.ramos.forEach(r => {
      const ramo = typeof r === "string" ? { nombre: r, prereqs: [] } : r;
      const fila = document.createElement("div");
      fila.className = "asignatura";

      const nombre = document.createElement("span");
      nombre.textContent = ramo.nombre;

      if (estado[ramo.nombre]) {
        nombre.classList.add("aprobada");
        nombre.textContent += " ✅";
      } else if (puedeInscribir(ramo)) {
        nombre.classList.add("habilitada");
        nombre.textContent += " (Disponible)";
      }

      const boton = document.createElement("button");
      boton.textContent = estado[ramo.nombre] ? "Desmarcar" : "Aprobar";
      boton.onclick = () => {
        estado[ramo.nombre] = !estado[ramo.nombre];
        guardarEstado();
        render();
      };

      fila.appendChild(nombre);
      fila.appendChild(boton);
      div.appendChild(fila);
    });

    contenedor.appendChild(div);
  });
}

render();