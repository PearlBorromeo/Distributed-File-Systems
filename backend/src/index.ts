
import express from "express";

const app = express();

app.listen(3001, () => {
    console.log("server started")
});

app.get('/', (req, res) => {
    res.send('hello world')
  })


app.get('/getByFileName',(req, res) => {

    console.log('getRes');
// res.download(__dirname + '/testdownload.txt')    
    res.send("Testing getByFileName")
})

app.delete('/deleteByFileName',(req,res) => {
    //call main server method to generate response
    console.log('delete res');
    res.send("Testing deleteByFileName")
})

app.post('/saveFile', (req, res) => {
    console.log('upload res');
    //call main server method to save the file
    res.send("Testing saveFile")
})

app.post('/registerUser', (req,res) =>{
    console.log('reg user');
    //call main server to save new user
    res.send("Testing registerUser")
})

app.get('/authenticateUser', (req,res) => {
    console.log('auth user')
    res.send("Testing authenticateUser")
})
