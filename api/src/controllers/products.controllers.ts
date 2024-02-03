import { Request, Response } from "express";
import { getProductList, getProductListByPriceDesc, getProductListByStars } from "../services/products.service";

export const getProducts = async (req: Request, res: Response) => {
    const { name } = req.params;

    const products = await getProductList(name);

    if (products.length === 0) {
        return res.status(404).json({ message: "No products found" });
    }

    return res.json(products).status(200);
};

export const getProductsByPriceDesc = async (req: Request, res: Response) => {
    const { name } = req.params;

    const products = await getProductListByPriceDesc(name);

    if (products.length === 0) {
        return res.status(404).json({ message: "No products found" });
    }

    return res.json(products).status(200);
};

export const getProductsByStars = async (req: Request, res: Response) => {
    const { name } = req.params;

    const products = await getProductListByStars(name);

    if (products.length === 0) {
        return res.status(404).json({ message: "No products found" });
    }

    return res.json(products).status(200);
};