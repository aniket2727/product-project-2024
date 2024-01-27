


const userprofilefata=require('../database/schemaUserInfoforProfile')



const userprofiledata=async(req,resp)=>{
    const {email}=req.body;
    try{
        
        const getuserprofiledata=userprofiledata({email:email})
        if(getuserprofiledata){
            resp.status(201).json({message:"user profile data get succcessfully",getuserprofiledata})
        }
        else{
            resp.status(401).json({message:"data is not available",getuserprofiledata})
        }
       
    }
    catch(error){
        resp.status(501).json({message:"internal error ",error})

    }
}


module.exports=userprofilefata;