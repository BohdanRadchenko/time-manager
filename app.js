const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const config = require('config')
const bodyParser = require("body-parser")

const PORT = process.env.PORT || config.get("port") || 5000
const MONGODB_URL = process.env.MONGODB_URL || config.get('mongoURL')

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

app.use('/api/v1', require('./routes/user.routes'))

app.use('/', express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

// mongoose.connect(MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         console.log(`MongoDB is Connected... ${MONGODB_URL}`);

app.listen(PORT, () => console.log(`App hes been started on port ${PORT} ...`))


// const start = async () => {
//     try {
//         await mongoose.connect(MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         console.log(`MongoDB is Connected... ${MONGODB_URL}`);
//         app.listen(PORT, () => console.log(`App hes been started on port ${PORT} ...`))
//     } catch (e) {
//         console.log('Server Error', e.message)
//         process.exit(1)
//     }
// }
//
// start()
