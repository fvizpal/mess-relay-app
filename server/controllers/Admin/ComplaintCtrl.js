import Complaint from "../../models/complaint.js";

//see all complaints
export const viewComplaints = async(req, res)=>{
    try{
        const comps = await Complaint.find();
        res.send(comps);
    }
    catch(err){
        res.send({msg:err.message});
    }
};

// delete a Complaint
export const deleteComplaint= async(req,res) => {
    try{
       const id= req.params.userId;
       console.log(id);
       await Complaint.deleteOne({userId:id});
       res.send(`Deleted complaint registered by user : ${id}`);
    }
    catch(err){
        res.send({msg:err.message});
    }
}