const {Schema,model} = require('mongoose')
const Profile = require('./Profile')

const userSchema= new Schema({
    name:{
        type:String,
        required:true,
        maxLength:30,
        trim:true
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    profile:{
        type:Schema.Types.ObjectId,
        ref:'Profile',
        
    },
    avatar:String,
   
    
}, {
    timestamps:true
})

const user= model('user',userSchema)

module.exports=user