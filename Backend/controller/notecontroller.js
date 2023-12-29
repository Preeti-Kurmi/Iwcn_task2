
const Note=require('../model/notemodal')

// add request
const addNote =  async (req,res)=>{
   
    const note=req.body.message;
    
  try{
  const result = await Note.create({message:note})
  res.status(201).json({success:true, message:'Successfully created', data:result })
  }catch(error){
   res.status(500).json({message:'there is error while creating note', error:error.message})
  }
}

//get request
const getNote =async (req,res)=>{
    try{
  const response = await Note.findAll();
   res.status(200).json({success:true, message:'Data fetched successfully', data:response })
    }catch(error){
          res.status(500).json({message:'there is error while fetching note', error:error.message})
    }
}

//delete request
const deleteNote = async (req,res) =>{
    const { id } = req.params
     try{
       await Note.destroy({where:{id:id}});
       res.status(202).json({message:'Data is deleted successfully'})
  }catch(error){
       res.status(500).json({message:'Error occurring while deletion', error:error.message})
  }
}

module.exports= { addNote, getNote, deleteNote };