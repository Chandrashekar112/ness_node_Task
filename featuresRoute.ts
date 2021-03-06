
const express=require("express");

 const router=express.Router();

 import {createFeatures,
    listFeatures,
    updateFeatures,
    getFeatureDetailsById,
    deleteFeatures}from '../controller/featuresController';
 



router.post('/',createFeatures);

router.get('/',listFeatures);

router.put('/:id',updateFeatures);

router.get('/:id',getFeatureDetailsById);

router.delete('/:id',deleteFeatures);

module.exports=router;