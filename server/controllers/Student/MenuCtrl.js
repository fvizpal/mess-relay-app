import Menu from "../../models/menu.js";

//see all days menu
export const viewMenu = async(req, res)=>{
    try{
        const menus = await Menu.find();
        res.send(menus);
    }
    catch(err){
        res.send({msg:err.message});
    }
};

// see the menu of a day (one will need to enter "id" in the url)
export const viewDayMenu = async(req,res) => {
    try{
        const day = req.params.Day;
        // console.log(day);
        const dayMenu = await Menu.findOne({Day:day});
        if(!dayMenu){
            return res.send("Enter a correct Day");
        }
        res.send(dayMenu);
    }
    catch(err){
        res.send({msg:err.message});
    }
}


