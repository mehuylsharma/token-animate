const express = require('express');
const app = express()

const indexRouter = require('./routes/index')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/', indexRouter.router)

app.listen(3000, () => {
    console.log('Server started.')
})