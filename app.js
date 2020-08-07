const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library', {useNewUrlParser: true,useUnifiedTopology:true});

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const librarySchema = new mongoose.Schema({
  email: String,
  name:String,
  phone:String,
  book:String,
  dept:String
});

const Library = mongoose.model('Library', librarySchema);

app.get("/submit",(req,res)=>{
    Library.find({},(err,data)=>{
      res.send(data);
    })
})

app.post("/submit",(req,res)=>{
    var myData = new Library(req.body);
    myData.save().then(()=>{
      res.send("Data Saved")
      res.sendStatus(200)
    }).catch((err)=>{
      console.log(err);
    })
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected");
});

app.listen(port,(e)=>{
    console.log(`App started on port ${port}`)
})