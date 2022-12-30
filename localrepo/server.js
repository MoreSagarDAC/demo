const express =require("express");
var app=express();
app.get("/",function(req,resp){
    resp.send(" Hello World!!! ")
});
app.listen(3000);
console.log(" Server present at 3000");
