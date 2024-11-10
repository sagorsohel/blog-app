const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = 5000;
const authRoute = require('./routes/authRoute')
app.use(express.json());

// app.use('/auth', authRoute)
app.get('/',(req,res)=>{
res.send(`Welcome`)
})




mongoose
  .connect(`mongodb+srv://sohel:9dB4cBORK9SaqcYa@cluster0.plk0vgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console(err));
