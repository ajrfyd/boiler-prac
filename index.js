const express = require('express');
const app = express();
const  port = 3000;
const mongoose = require('mongoose');
const { User } = require('./models/User.js');
const config = require('./config/key')
// const bodyParser = require('body-parser');

app.use(express.json())

mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Success!!!'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Welcome to my page!~')
})


app.post('/register', (req, res) => {

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true,
    })
  })

})






app.listen(port, () => console.log('Listening on ' + port))
