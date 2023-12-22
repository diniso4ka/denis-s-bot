require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorMiddleware);

const PORT = process.env.PORT;
async function start() {
    try {
        await mongoose.connect(process.env.DB_URL, {});
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

start();