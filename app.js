const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');
const endpointError = require('./middlewares/endpoint.js')
const error = require('./middlewares/errors.js')

app.use(express.static('public'))

app.use(express.json())

app.use(endpointError)
app.use(error)

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`listening port ${port}`)
})