const Menu = require("../models/menuSchema")


//adding a menu
const createMenu = (req, res)=> {
    const newMenu = new Menu({
        
        Menu: req.body.Menu,
        id:req.body.id,
        image: req.body.image,
        price:req.body.price
        
    })
    newMenu.save();
    res.status(200).json(newMenu);
}

//get all menus
   const getMenu =async(req, res)=>{
     const getmenus = await Menu.find();
    res.status(200).json(getmenus)
  }

  // deleting  a menu
  const deleteMenu =async(req, res)=>{
      const foundMenu = await Menu.findById(req.params.id)
      if (foundMenu){
          foundMenu.remove()
          res.json({msg:"Menu removed"})
      }else{
          res.status(404).json({error:"Menu not found"})
      }
  }

module.exports={createMenu, getMenu, deleteMenu}