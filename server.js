const express = require ('express')

const app = express()
const hbs =require('hbs')
app.set("view engine", hbs);
 let hour= new Date().getHours()
 app.use(express.static(__dirname+"/public"))
 

 if (hour<8 || hour>18) app.get("*", (req, res) => {res.render("close.hbs")});
else{app.get('/home',(req,res)=>
res.render('home.hbs'))}



app.get('/home',(req,res)=>{
    res.render('home.hbs')
})
app.get('/service',(req,res)=>{
    res.render('ourservices.hbs',{name:'houssem'})
})
app.get('/contact/:name',(req,res)=>{
    res.render('contact.hbs',{name:req.params.name})
})

app.listen(3000,(err)=>{
if (err) console.log("server is not ranning")
else console.log("server is running on port 3000")
})