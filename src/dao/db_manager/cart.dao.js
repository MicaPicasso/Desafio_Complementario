import { cartModel } from "../models/cartModel.js";

class CartDao {
  async getAllProducts() {
    return await cartModel.find();
  }

  async getProductById(id) {
    return await productModel.findById(id);
  }

  async createCart(cart) {
    return await cartModel.create(cart);
  }

  async updateProduct(id, product) {
    return await productModel.findByIdAndUpdate(id, product);
  }

  async deleteProduct(id) {
    return await productModel.findByIdAndDelete(id);
  }
}

export default new CartDao();