const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    menu: {
        type: Array,
        required: true,
    },
  id: {
    type: String,
    required: true,
    unique:true,
   },
  
    image:{
        type: String,
        required:true,
        
},
  price: {
    type: String,
    required: true,
  },
});
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
