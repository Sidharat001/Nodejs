import expres from 'express'
import routes from './routes/web.js'

// Execute the Express File
const app = expres()
// Create port for Server
const port = process.env.port || 3000

app.set('view engine', 'ejs')

// Create Routes For Static File
app.use('/', routes)

// RunServer  
app.listen(port, () => {
    console.info(`Server Run on ${port} Port`)
})