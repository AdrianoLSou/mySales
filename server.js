const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json())
app.listen(3000);

const users = [];

app.get('/users', (req, res)=> {
    res.json(users)
})