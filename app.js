const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');


app.use(express.static('public'))

app.use(express.json())

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`listening port ${port}`)
})