const express = require('express');
const app = express();
const  port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ajrfyd3943:3943@boiler.gzbyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Success!!!'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('hello???')
})

app.listen(port, () => console.log('Listening on ' + port))
