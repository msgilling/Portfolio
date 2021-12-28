import express from 'express'

const app = express()
const port = 4000

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.end('Welcome to the home page')
})

app.get('/about', (req, res) => {
  res.end('Welcome to the about page')
})

app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))