import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date;
}


const MessageSchema: Schema<Message> = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verify: string;
    verifyexp: Date;
    isVerified: boolean;
    AcceptingMessage: boolean;
    message: Message[];
}


const UserSchema: Schema<User> = new Schema({
    username:{
        type: String,
        required: [true,"Username Required"],
        trim: true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,"please use valid email"]

    },
    password: {
        type: String,
        required: [true,"Password is Required!"]
    },
    verify:{
        type: String,
        required: [true,"Verify is required"]
    },
    verifyexp:{
        type: Date,
        required: true
    },
    isVerified:{
        type: Boolean,
        default:true,
    },
    AcceptingMessage:{
        type:Boolean,
        default:true
    },
    message: [MessageSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;