import express from "express";
import { MainServer } from "./MainServer";

const app = express();
const ms = new MainServer()

app.listen(3001, () => {
    console.log("server started")
});

app.get('/', (req, res) => {
    res.send('hello world')
  })


app.get('/getByFileName',(req, res) => {

   ms.getByFileName("test.jfif")
// res.download(__dirname + '/testdownload.txt')    
    res.send("Testing getByFileName")
})

app.delete('/deleteByFileName',(req,res) => {
    //call main server method to generate response
    res.send("Testing deleteByFileName")
})

app.post('/saveFile', (req, res) => {
    
    //call main server method to save the file
    res.send("Testing saveFile")
})

app.post('/registerUser', (req,res) =>{
    //call main server to save new user
    res.send("Testing registerUser")
})

app.get('/authenticateUser', (req,res) => {
    res.send("Testing authenticateUser")
})
