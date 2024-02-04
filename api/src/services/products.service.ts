import { getMercadoLibreProductList, getAlkostoProductList } from "./scraping.service"
import { sortProducts } from "./utils/sortProducts";

export const getProductList = async (productName: string) => {
    return sortProducts(await getAlkostoProductList(productName), 'price');
}

export const getProductListByPriceDesc = async (productName: string) => {
    return sortProducts(await getMercadoLibreProductList(productName), 'price-desc');
}

export const getProductListByStars = async (productName: string) => {
    return sortProducts(await getMercadoLibreProductList(productName), 'stars');
}