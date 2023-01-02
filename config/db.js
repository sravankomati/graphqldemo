const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/graphql",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("db is connected");
    }
})