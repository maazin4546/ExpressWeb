const express = require('express')
const app = express()
const port = process.env.PORT || 8000 //for hosting purpose
const path = require('path')
const hbs = require('hbs')

//Static Page Serve
const staticPath = path.join(__dirname, '../public')
const tempPath = path.join(__dirname,'../templates/views')
const tempPartials = path.join(__dirname,'../templates/partials')

app.set("view engine", 'hbs')
app.set('views',tempPath)
hbs.registerPartials(tempPartials)

app.use(express.static(staticPath))


// Routing  
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.get('/weather', (req, res) => {
    res.render("weather")
})

app.get('*', (req, res) => {
    res.render("404err",{
        errMsg:'404 Error Message'
    })
})

app.listen(port, () => {
    console.log(`Live on port number ${port}`)
})