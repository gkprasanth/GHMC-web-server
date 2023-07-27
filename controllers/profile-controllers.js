const Profile=require("../models/profile");

const register = async(req,res,next)=>{
    const {nameOwner,phnNo,buildingName,hosuePlotNo,units,comercialUnits, residentialUnits, zone,circle,ward}=req.body.data;
    console.log( nameOwner,phnNo,buildingName,hosuePlotNo,units,comercialUnits, residentialUnits, zone,circle,ward,zone,circle,ward);
    const profile= new Profile({
        name_of_owner:nameOwner,
        contact_no:phnNo,
        building_name:buildingName,
        plot_no:hosuePlotNo,
        total_units:units,
        comercial_units:comercialUnits,
        residential_units:residentialUnits,
        zone,
        circle,
        ward
    })
    try{
        await profile.save();
    }catch(err)
    {
        console.log(err);
    }
    return res.status(201).json({message:"The profile has been created"});
}
exports.register=register;