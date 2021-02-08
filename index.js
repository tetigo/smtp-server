require('dotenv').config()
const express = require('express')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const isDev = process.env.NODE_ENV !== 'production'

if (!isDev && cluster.isMaster) {
    console.info(`Node cluster master ${process.pid} is runnning`)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.info(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal: ${signal}`)
    })
} else {
    const app = express()
    const morgan = require('morgan')
    // const path = require('path')
    // app.use(express.static(path.join(__dirname, 'frontend.js')))
    app.use(express.json())
    app.use(morgan('dev'))

    const routes = require('./src/routes')
    app.use('/', routes)

    app.listen(process.env.PORT, () => {
        console.info(`Node ${isDev ? 'dev server' : 'cluster worker' + process.id}: listening on port ${process.env.PORT}`)
    })
}

