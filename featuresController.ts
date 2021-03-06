const Feature =require('../models/features');


export const createFeatures=async (req:any,res:any)=>{
    const returnMessage={
        isError:true,
        data:null,
        message:"Error occured!"
    }

    try{
        const newFeatures=new Feature({...req.body});
        await newFeatures.save();
        returnMessage.isError=false;
        returnMessage.message="New user created successFully"
        return res.json(returnMessage);
    }catch(eror:any){
      return res.status(400).json(returnMessage);
    }
   
   
}

export const listFeatures=async (req:any,res:any)=>{
    const returnMessage={
        isError:true,
        data:null,
        message:"Error occured!"
    }

   try{
       let newlistFeatures=await Feature({});
       returnMessage.isError=false;
       if(newlistFeatures===0){
        returnMessage.message="No Records founds";
        returnMessage.data=newlistFeatures;
       }else{
        returnMessage.message="Records Found";
        returnMessage.data=newlistFeatures;
       }
       return res.json(returnMessage);
   }catch(err:any){
      return res.status(400).json(returnMessage);
   }
   
}

export const updateFeatures=async (req:any,res:any)=>{
    const returnMessage={
        isError:true,
        data:null,
        message:"Error occured!"
    }

   const feature_id= req.params.id;
   try{
       const newUpdateFeature=await Feature({_id:feature_id});
       if(!feature_id){
        returnMessage.message="there is no features this id .Please create one!";

       }else{
           req.body.reature_date=new Date();
           await Feature.updateOne({_id:feature_id},{$set:req.body});
            returnMessage.isError=false;
       }
       return res.json(returnMessage);
   }catch(err:any){
       return res.status(400).json(returnMessage);
   }

  
   
}

export const getFeatureDetailsById=async (req:any,res:any)=>{
    const returnMessage={
        isError:true,
        data:null,
        message:"Error occured!"
    }
 try{
     let newGetFeatureId=await Feature(req.params.id);
     returnMessage.isError=false;

     if(!newGetFeatureId){
     returnMessage.message="There is no features with this id, please create one."
     }else{
         returnMessage.message="Records found";
         returnMessage.data=newGetFeatureId;
     }

     return res.josn(returnMessage);
     
 }catch(err:any){
   return res.status(400).json(returnMessage);
 }
  
   
}

export const deleteFeatures=async (req:any,res:any)=>{
    const returnMessage={
        isError:true,
        data:null,
        message:"Error occured!"
    }
    try{
        let newDeleteFeatures=await Feature({_id:req.params.id});

        returnMessage.isError=false;
        if(!newDeleteFeatures){
        returnMessage.message="There is no features with this id.";
    }else{
        await Feature.remove({_id:req.params.id});

        returnMessage.isError=false;
        returnMessage.message="Feature delate Successfully!"
    }

    return res.json(returnMessage);

    }catch(err:any){
      return res.status(400).json(returnMessage)
    }
  
   
}


