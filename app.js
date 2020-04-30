const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const config = require('config')
const bodyParser = require("body-parser")
const User = require('./models/User')

const PORT = process.env.PORT || config.get("port") || 5000
const MONGODB_URI = process.env.MONGODB_URI || config.get('mongoURL')

corsOptions = {
  origin: "https://ptm-book.herokuapp.com/",
  optionsSuccessStatus: 200
};

const app = express()

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json({extended: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/api/v1/auth', require('./routes/auth.routers'))

app.use('/', express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

const start = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log(`MongoDB is Connected... `)
    app.listen(PORT, () => console.log(`App hes been started on port ${PORT} ...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
