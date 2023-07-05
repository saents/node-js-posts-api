import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 5000;
const DB_URL = 'mongodb+srv://Arman:armdev@firstcluster.tlyvaji.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('ЗАПУЩЕН НА ПОРТЕ ' + PORT))
    } catch (e) {
        console.log(e)
    }
}; startApp();


