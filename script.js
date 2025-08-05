// Plan de estudios: Fonoaudiología UDEC
const plan = [
  {
    semestre: 1,
    ramos: [
      "Psicología Social",
      "Biología Celular Básica",
      "Anatomía General",
      "Física General",
      "Introducción a la Fonoaudiología",
      "Linguística General"
    ]
  },
  {
    semestre: 2,
    ramos: [
      { nombre: "Fonética - Fonología I", prereqs: ["Linguística General"] },
      { nombre: "Morfosintaxis I", prereqs: ["Linguística General"] },
      { nombre: "Acústica Física", prereqs: ["Física General"] },
      { nombre: "Anatomía de los Órganos Fonoarticulatorios", prereqs: ["Anatomía General"] },
      { nombre: "Fisiología humana", prereqs: ["Biología Celular Básica"] },
      "Psicología Evolutiva",
      { nombre: "Bioética y Profesionalismo", prereqs: ["Introducción a la Fonoaudiología"] }
    ]
  },
  {
    semestre: 3,
    ramos: [
      { nombre: "Fonética - Fonología II", prereqs: ["Fonética - Fonología I"] },
      { nombre: "Morfosintaxis II", prereqs: ["Morfosintaxis I"] },
      { nombre: "Semántica y Pragmática", prereqs: ["Linguística General"] },
      { nombre: "Sistema Estomatognático - Fonoaudiología", prereqs: ["Anatomía de los Órganos Fonoarticulatorios", "Fisiología humana"] },
      { nombre: "Fisiopatología Humana", prereqs: ["Fisiopatología Humana"] },
      { nombre: "Neuroanatomía", prereqs: ["Anatomía de los Órganos Fonoarticulatorios"] },
      { nombre: "Psicolingüística", prereqs: ["Fonética - Fonología I", "Morfosintaxis I"] }
    ]
  },
  // 🔽 Continúa agregando más semestres aquí 👇
  {
    semestre: 4,
    ramos: [
      { nombre: "Análisis Acústico de la Fonoarticulación", prereqs: ["Fonética - Fonología II", "Anatomía de los Órganos Fonoarticulatorios", "Acústica Física"] },
      { nombre: "Taller de Comunicación Oral y Corporal", prereqs: ["Linguística General", "Introducción a la Fonoaudiología"] },
      { nombre: "Psicolingüística Evolutiva", prereqs: ["Psicología Evolutiva"] },
      { nombre: "Análisis del Discurso Oral", prereqs: ["Morfosintaxis II", "Semántica y Pragmática"] },
      { nombre: "Neurología y Fonoaudiología", prereqs: ["Fisiopatología Humana"] },
      { nombre: "Neurolingüística", prereqs: ["Neuroanatomía", "Psicolingüística"] },
      { nombre: "Taller Integrador de Fonoaudiología I", prereqs: ["Fonética - Fonología II", "Morfosintaxis II", "Semántica y Pragmática", "Psicolingüística"] }
    ]
  },
  {
    semestre: 5,
    ramos: [
      { nombre: "Lenguaje y Habla Infanto-Juvenil", prereqs: ["Psicolingüística Evolutiva", "Análisis del Discurso Oral", "Semántica y Pragmática"] },
      { nombre: "Lenguaje y Habla en Adultos I", prereqs: ["Neurología y Fonoaudiología", "Neurolingüística"] },
      { nombre: "Voz I", prereqs: ["Análisis Acústico de la Fonoarticulación", "Sistema Estomatognático - Fonoaudiología", "Fisiopatología Humana"] },
      { nombre: "Funciones Orofaciales I", prereqs: ["Neurología y Fonoaudiología", "Sistema Estomatognático - Fonoaudiología", "Fisiopatología Humana"] },
      { nombre: "Salud Pública y Fonoaudiología", prereqs: ["Taller Integrador de Fonoaudiología I"] },
      "Sistema Educacional Chileno y Fonoaudiología",
      "Inglés Comunicativo I (Nivel Principiante)"
    ]
  },
  {
    semestre: 6,
    ramos: [
      { nombre: "Lenguaje y Habla Infanto-Juvenil II", prereqs: ["Lenguaje y Habla Infanto-Juvenil"] },
      { nombre: "Lenguaje y Habla en Adultos II", prereqs: ["Lenguaje y Habla en Adultos I"] },
      { nombre: "Voz II", prereqs: ["Voz I"] },
      { nombre: "Funciones Orofaciales II", prereqs: ["Funciones Orofaciales I"] },
      { nombre: "Sistema Auditivo y Vestibular I", prereqs: ["Taller Integrador de Fonoaudiología I"] },
      { nombre: "Metodología de la Investigación", prereqs: ["Taller Integrador de Fonoaudiología I"] },
      { nombre: "Inglés Comunicativo II (Nivel Elemental)", prereqs: ["Inglés Comunicativo II (Nivel Elemental)"] }
    ]
  },
  {
    semestre: 7,
    ramos: [
      { nombre: "Lenguaje y Habla Infanto-Juvenil III", prereqs: ["Lenguaje y Habla Infanto-Juvenil II"] },
      { nombre: "Lenguaje y Habla en Adultos III", prereqs: ["Lenguaje y Habla en Adultos II"] },
      { nombre: "Voz III", prereqs: ["Voz II"] },
      { nombre: "Funciones Orofaciales III", prereqs: ["Funciones Orofaciales II","Fonética - Fonología II"] },
      { nombre: "Sistema Auditivo y Vestibular II", prereqs: ["Sistema Auditivo y Vestibular I"] },
      { nombre: "Seminario de Investigación", prereqs: ["Metodología de la Investigación"] }
    ]
  },
  {
    semestre: 8,
    ramos: [
      "Primeros Auxilios",
      { nombre: "Sistema Auditivo y Vestibular III", prereqs: ["Sistema Auditivo y Vestibular II"] },
      { nombre: "Proyecto de Innovación y Emprendimiento", prereqs: ["Lenguaje y Habla Infanto-Juvenil III", "Lenguaje y Habla en Adultos III", "Voz III", "Funciones Orofaciales III", "Sistema Auditivo y Vestibular II"] },
      { nombre: "Taller Integrador de Fonoaudiología II", prereqs: ["Lenguaje y Habla Infanto-Juvenil III", "Lenguaje y Habla en Adultos III", "Voz III", "Funciones Orofaciales III", "Sistema Auditivo y Vestibular II", "Sistema Auditivo y Vestibular II"] },
      "Electiva 1",
      "Electiva 2",
      "Electiva 3"
    ]
  },
  {
    semestre: 9,
    ramos: [
      { nombre: "Internado de Fonoaudiología", prereqs: ["Primeros Auxilios", "Sistema Auditivo y Vestibular III", "Proyecto de Innovación y Emprendimiento", "Taller Integrador de Fonoaudiología II"] }
    ]
  },
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
  const contenedor = document.getElementById("grid-container");
  contenedor.innerHTML = "";

  plan.forEach(function(bloque) {
    const col = document.createElement("div");
    col.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = "Semestre " + bloque.semestre;
    col.appendChild(titulo);

    bloque.ramos.forEach(function(r) {
      const ramo = typeof r === "string" ? { nombre: r, prereqs: [] } : r;
      const div = document.createElement("div");
      div.className = "asignatura";
      div.textContent = ramo.nombre;

      if (estado[ramo.nombre]) {
        div.classList.add("aprobada");
      } else if (puedeInscribir(ramo)) {
        div.classList.add("habilitada");
      }

      div.onclick = function() {
        estado[ramo.nombre] = !estado[ramo.nombre];
        guardarEstado();
        render();
      };

      col.appendChild(div);
    });

    contenedor.appendChild(col);
  });
}

document.getElementById("descargar-imagen").addEventListener("click", function () {
  const container = document.getElementById("grid-container");

  html2canvas(container).then(canvas => {
    const link = document.createElement("a");
    link.download = "malla_fonoaudiologia.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

render();