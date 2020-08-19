const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-feira",
  "Sábado",
]

// funcionalidades da aplicação

function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1
  return subjects[arrayPosition]
}

module.exports = (
  subjects,
  weekdays,
  getSubject
)