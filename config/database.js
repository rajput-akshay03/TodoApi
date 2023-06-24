const mongoose = require('mongoose')
require("dotenv").config();
const dbconnect =()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {useNewUrlParser:true,
        useUnifiedTopology:true}
        ).then(()=>{console.log("connection successfull")}).catch
        ((error)=>{console.log("error in connection");
            console.log(error.message);
            process.exit(1);
    });
};
module.exports= dbconnect;