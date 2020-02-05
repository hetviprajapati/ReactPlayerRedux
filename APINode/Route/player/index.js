var express=require('express');
var router=express.Router();
var chalk=require('chalk');
var Player=require('../../Schema/player');
var cors=require('cors');

router.use(express.json());
router.use(cors());


router.post('/create',function(req,res){
     var player=new Player(req.body);  
      player.save().then(item=>{
            res.status(200).send("Saved Data Successfully");
      }).catch(err=>{
        if(err)
        {
            return res.status(400).send("Data not Saved"+err);  
        }   
      })
})

router.get('/get',async function(req,res){
     try{
        var player=await Player.find({});
        res.status(200).json(player);
     }catch(err){
        console.log(chalk.red("Error Occured"));
        res.status(400).send("Error while retriving record")
     }
})
module.exports=router;