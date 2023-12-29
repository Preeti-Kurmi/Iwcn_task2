const express = require('express');
const cors = require('cors');
const notes = require('./routes/route');
const sequelize = require('./util/database');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',notes);

sequelize.sync()
.then(res=>
    {
       app.listen(80, console.log('Server starts on 80')); 
    }
)
.catch(err=>console.log(err));