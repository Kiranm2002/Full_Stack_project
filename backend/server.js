const express = require('express');
const mongosse = require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"frontend")))
mongosse.connect('mongodb://localhost:27017/practiceDB').then(()=>{
    console.log('connected to db')}).catch((err)=>{console.log(err)})

const userRoutes = require('./routes/user_routes');

// app.get("/ping", (req, res) => {
//   console.log("PING HIT");
//   res.send("pong");
// });

app.use('/api/users',userRoutes)



app.listen(3000,()=>{
    console.log('server started');
    
})