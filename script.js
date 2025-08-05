// Datos del plan extraídos del CSV
const plan = [
  {
    "semestre": 1,
    "ramos": [
      "Psicología Social",
      "Biología Celular Básica",
      "Anatomía General",
      "Física General",
      "Introducción a la Fonoaudiología",
      "Linguística General"
    ]
  },
  {
    "semestre": 2,
    "ramos": [
      { "nombre": "Fonética - Fonología I", "prereqs": ["Linguística General"] },
      { "nombre": "Morfosintaxis I", "prereqs": ["Linguística General"] },
      { "nombre": "Acústica Física", "prereqs": ["Física General"] },
      { "nombre": "Anatomía de los Órganos Fonoarticulatorios", "prereqs": ["Anatomía General"] },
      { "nombre": "Fisiología humana", "prereqs": ["Biología Celular Básica"] },
      "Psicología Evolutiva",
      { "nombre": "Bioética y Profesionalismo", "prereqs": ["Introducción a la Fonoaudiología"] }
    ]
  },
  {
    "semestre": 3,
    "ramos": [
      { "nombre": "Fonética - Fonología II", "prereqs": ["Fonética - Fonología I"] },
      { "nombre": "Morfosintaxis II", "prereqs": ["Morfosintaxis I"] },
      { "nombre": "Semántica y Pragmática", "prereqs": ["Linguística General"] },
      { "nombre": "Sistema Estomatognático - Fonoaudiología", "prereqs": ["Anatomía de los Órganos Fonoarticulatorios", "Fisiología humana"] },
      { "nombre": "Fisiopatología Humana", "prereqs": ["Fisiología humana"] },
      { "nombre": "Neuroanatomía", "prereqs": ["Anatomía de los Órganos Fonoarticulatorios"] },
      { "nombre": "Psicolingüística", "prereqs": ["Fonética - Fonología I", "Morfosintaxis I"] }
    ]
  },
  // Puedes seguir agregando más semestres aquí si es necesario...
];
