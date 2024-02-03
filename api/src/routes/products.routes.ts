import { Router } from "express";
import { getProducts, getProductsByPriceDesc, getProductsByStars } from "../controllers/products.controllers";

const productsRouter: Router = Router();

productsRouter.get("/:name", getProducts);
productsRouter.get("/price-desc/:name", getProductsByPriceDesc);
productsRouter.get("/stars/:name", getProductsByStars);

export default productsRouter;