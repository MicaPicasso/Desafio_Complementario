import { Schema, model } from "mongoose";


const cartSchema = new Schema({
   
});


const cartModel = model("cart", cartSchema)

export {cartModel};