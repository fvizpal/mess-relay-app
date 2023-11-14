import Notice from "../../models/notice.js";

// add a notice 
export const addNotice = async(req,res) => {
    try{
        const noticeItem=await Notice.create(req.body);
        // to send and save data at the backend in json form
        res.send(noticeItem);
      }
      catch(err){
        res.send({msg: err.message});
      }
};

//see all  notices
export const viewNotices = async(req, res)=>{
    try{
        const notices = await Notice.find();
        res.send(notices);
    }
    catch(err){
        res.send({msg:err.message});
    }
};

// Delete a single Day Menu
export const deleteNotice = async(req, res)=>{
    try{
        const sr = req.params.Serial;
        console.log(sr);
        await Notice.deleteOne({Serial:sr});
        res.send(`Deleted notice with Serial number ${sr}`);
    }
    catch(err){
        res.send({msg:err.message});
    }
} 