const proffys = [{
    name: "Matheus França",
    avatar: "https://avatars1.githubusercontent.com/u/61566949?s=460&u=513fc5e8e3422e553a4c06c5b71716f9fc9347d3&v=4",
    whatsapp: "40028922",
    bio: "Entusiasta das melhores histórias do Brasil. Sendo um dos exploradores mais relevantes do Brasil.",
    subject: "História",
    cost: "20",
    weekday: [0],
    time_from: [],
    time_to: [],
  },
  {
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "40028922",
    bio: "Entusiasta das melhores histórias do Brasil. Sendo um dos exploradores mais relevantes do Brasil.",
    subject: "História",
    cost: "20",
    weekday: [1],
    time_from: [],
    time_to: [],
  }
]

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html")
}


const express = require('express')
const server = express()

// CONFIG NUNJUCKS
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500)