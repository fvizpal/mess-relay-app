import Notice from "../../models/notice.js";

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
