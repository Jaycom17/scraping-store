import { Product } from "../../models/product.model";
import { sortString } from "../../types";

export const sortProducts = (products: Product[], sort: sortString): Product[] => {
    switch (sort) {
        case "price":
        return products.sort((a, b) => a.price - b.price);
        case "price-desc":
        return products.sort((a, b) => b.price - a.price);
        case "stars":
        return products.sort((a, b) => b.stars - a.stars);
        default:
        return products;
    }
};