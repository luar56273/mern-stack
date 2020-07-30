const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('//mongodb+srv://Once:Za0927756273@cluster0.vnjsu.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrIparser: true, useUnifiedTopology: true});
const cors = require('cors');
const app = express();
const port = process.env.PORT | 80 ;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.get('/', (req, res) => {
   res.send('Hello World') ;
})
app.get('/api', require('./routes/index.js') );

app.listen(port, () =>{
    console.log('Server runing http://localhost');
});
