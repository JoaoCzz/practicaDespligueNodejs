import { Router } from "express";
import {
  createProducto,
  deleteProducto,
  getProductos,
  getProducto,
  updateProducto,
} from "../controllers/productos.controller.js";
const router = Router();


router.get("/employees", getProductos);

router.get("/employees/:id", getProducto);

router.delete("/employees/:id", deleteProducto);

router.post("/employees", createProducto);

router.patch("/employees/:id", updateProducto);

export default router;
