const Todo = require("../models/Todo");
exports.getTodo=async(req,res)=>{
    try{
          const todos = await Todo.find({});
          res.status(200)
          .json({
            success:true,
            data:todos,
            message:"entire data is fetches",
          })
    }
    catch(err)
    {   
        console.log(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }  
};
exports.getTodoById=async(req,res)=>{
    try{   
          const id = req.params.id;
          const todosbyid = await Todo.findById({_id:id});
          if(!todosbyid)
          {
            return res.status(404).josn({
                success:false,
                message:"no data is found",
            })
          }
          res.status(200).json(
            {
                success:true,
                data:todosbyid,
                message:`entire data is fetched of id ${id}`,
            }
          )
    }
    catch(err)
    {
       console.log(err)
       res.status(500).json(
        {
            success:false,
            data:"not finded",
            message:err.message,
        }
       )
    }
}