// user, post , body, replies


const {Schema,model}=require('mongoose')
const User =require('./User')
const Post =require('./Post')
const commentSchema= new Schema({
    post:{
        type:Schema.Types.ObjectId,
        ref:Post,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    body:{
        type:String,
        required:true,
        trim:true

    },
    replies:[{
        body:{
            type:String,
            required:true,
           
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:User,
            required:true
        },
        createdAt:{
            type:Date,
            default:new Date()
        }

    }]
},{
    timestamps:true
})
const Comment =model('Comment',commentSchema)
module.exports = Comment