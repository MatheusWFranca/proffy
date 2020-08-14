const Database = require('./db')

Database.then((db) => {
  proffy = {
    name: "Matheus França",
    avatar: "https://avatars1.githubusercontent.com/u/61566949?s=460&u=513fc5e8e3422e553a4c06c5b71716f9fc9347d3&v=4",
    whatsapp: "40028922",
    bio: "Entusiasta das melhores histórias do Brasil. Sendo um dos exploradores mais relevantes do Brasil.",
  }

  classValue = {
    subject: "História",
    cost: "20",
  }
  
  classSchedule = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]
})
