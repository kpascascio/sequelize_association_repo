require('dotenv').config();
const express = require('express');
const app = express();

require('./models');
app.use(require('body-parser').json())
app.use(require('./routes'))
app.use('*/*', (req, res) => res.status(404).json({error: true, msg: 'route not found'}))

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})