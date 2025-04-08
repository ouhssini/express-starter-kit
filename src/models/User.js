import mongoose from "mongoose";



const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})



const User =  mongoose.model("Users", UserSchema);

export default User;