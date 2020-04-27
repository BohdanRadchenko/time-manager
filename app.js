const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
const bodyParser = require("body-parser")

const PORT = process.env.PORT || config.get("port") || 5000

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use('/api/v1', require('./routes/user.routes'))

app.use('/', express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

const start = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_URL || config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`app hes been started on port ${PORT} ...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()