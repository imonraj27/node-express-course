const express = require('express') // it is a function 
// it returns a function named express

const path = require('path')

const app = express()


//setup static and middleware
app.use(express.static("./public"))

app.get('/', (req, res) => {
    console.log('user hits the homepage');
    res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
})



app.all('*', (req, res) => {
    res.status(404).send('CONTENT NOT FOUND')
})

app.listen(5000, () => {
    console.log("SERVER IS LISTENING");
})