import mongoose from "mongoose";



const ModelSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})



const Model =  mongoose.model("Models", ModelSchema);

export default Model;