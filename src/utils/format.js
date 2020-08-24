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
  return subjects[+subjectNumber - 1]; // This + is the way to ensure that its a number
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':'); // Using disruption instead of "const hour = time.split(:)[0]"
  return Number((hour * 60) + minutes);
}

module.exports = { subjects, weekdays, getSubject, convertHoursToMinutes };