const express = require("express")
const router = express.Router();
const infoRouter = require("./infoSchema");

//Create
router.post("/",async(req,res) => {
    console.log(req.body);
    var data = new infoRouter({
        category:req.body.category,
        subCategory:req.body.subCategory
    });
    await data.save();
    res.json(data);
})

//getdata
router.get("/",async(req,res) =>{
    var findData = await infoRouter.find();
    res.json(findData);
})

//update
router.put("/update", async(req,res) =>{
    var update = await infoRouter.update({_id:req.body._id},{$set:{
            category:req.body.category,
            subCategory:req.body.subCategory
    }});
    res.json(update); 
})

//delete
router.delete("/del/:id",async(req,res) =>{
    var detData = await infoRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({message:"Delete successfully"})
    })
})
  
router.get("/",(req,res) => {
    res.json("I am from router file");
})
module.exports = router;  