const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.json());
app.get('/',(req,res)=>{
res.send(`Welcome`)
})

mongoose
  .connect(`mongodb://localhost:27017/blog-app`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console(err));
