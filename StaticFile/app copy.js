import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/web.js';

const app = express();
const port = process.env.PORT || 3000;
// const db = mongoose.connect('mongodb://localhost:27017')

app.use('/', routes)
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.listen(port)