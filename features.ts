const express=require('express');
const mongoose=require("mongoose");
const Schema =mongoose.Schema;

const FeatureSchema =new Schema({
   feature_name:{
       type:String,
   },
   feature_type:{
       type:String,
   },
   feature_description:{
     type:String,
   },
   feature_created_timestamp:{
      type:Date,
   },
   feature_version:{
       type:Number
   },
   feature_owner:{
       type:String,
   },
   feature_data:{
    type:Date,
    default:Date,
   }
})

// module.exports=Feature=mongoose.model("features",FeatureSchema);

export default{
    Feature:mongoose.model("features",FeatureSchema)
}