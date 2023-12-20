// import { Router } from "express";
// import cartDao from "../dao/db_manager/cart.dao.js";

// const router= Router()



// // crearlo
// router.post("/", async(req,res)=>{
    
// })


// recibe los productos
// router.get("/:cid", (req,res)=>{
//     const {cid}= req.params
//     cartManager.getProductsByCartId(Number(cid))
//     const index= cartManager.carts.findIndex((el)=> el.id === Number(cid))
//     if(index=== -1){
//         res.json({status: "el carrito solicitado no existe"})
//     }
//     const response= cartManager.carts[index].products
//     res.json({carrito: Number(cid), products: response})

// })

// // agregar productos
// router.post("/:cid/product/:pid", (req,res)=>{
//   const {pid,cid}=req.params
//   cartManager.addProducts(Number(cid), Number(pid), "./src/Productos.json")
//   const index= cartManager.carts.findIndex((el)=> el.id === Number(cid))
//   const response= cartManager.carts[index]
//     res.json({products: response})
//     console.log(response);
//     console.log(index);
// })






export default router