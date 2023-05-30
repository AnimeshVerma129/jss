const express=require("express");
const app=express();
app.listen(3000);


app.get("/",(req,res)=>{res.sendFile(__dirname + "/home.html");})
app.get("/login",(req,res)=>{res.sendFile(__dirname + "/login.html");})
app.get("/contact",(req,res)=>{res.sendFile(__dirname + "/contact.html");})
app.get("/about",(req,res)=>{res.sendFile(__dirname + "/about.html");})
app.get("/login/action",(req,res)=>{res.sendFile(__dirname + "/action.html");})

app.get("/xyz",(req,res)=>{res.send(req.query)});
