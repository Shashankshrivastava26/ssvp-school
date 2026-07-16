const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const photosSchema=new Schema({
    url:String
})

const photos=mongoose.model("photos",photosSchema);

module.exports=photos;