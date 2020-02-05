var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var playerSchema=new Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    dob:{
        type:Date,
        require:true
    },
    rolebowler:{
        type:String,
        trim:true
    },
    rolebestman:{
        type:String,
        trim:true
    },
    team:{
        type:String,
        trim:true
    }
},{
    collection:'player',
    timestamps:true
})

module.exports=mongoose.model('player',playerSchema);