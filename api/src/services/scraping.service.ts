import { Product } from '../models/product.model';
import { fixText } from "./utils/text";
import { requestUrl } from "./utils/request";
import puppeteer from "puppeteer";

export const getMercadoLibreProductList = async (
  product: string
): Promise<Product[]> => {
  const $: cheerio.Root | undefined = await requestUrl(
    `https://listado.mercadolibre.com.co/${fixText(product, "-")}`
  );

  if (!$) {
    return [];
  }

  const productList = $(".ui-search-layout__item");
  const products: Product[] = [];

  productList.each((_index: number, element: cheerio.Element) => {
    const product = $(element);

    const title = product.find(".ui-search-item__title").text();
    const priceTotal = product.find(".ui-search-price__second-line");
    const priceString = priceTotal
      .find(".andes-money-amount__fraction")
      .first()
      .text();
    const price = parseInt(priceString.replace(/\./g, ""));
    const image = product
      .find(".ui-search-result-image__element")
      .attr("data-src");
    const link = product.find(".ui-search-link").attr("href");
    const freeShipping = product
      .find(".ui-search-result__content-columns")
      .text()
      .includes("Envío gratis");
    const stars = parseFloat(product.find(".ui-search-reviews__rating-number").text()) || 0;
    products.push({ title, price, image, link, freeShipping, stars });
  });

  return products;
};

export const getAlkostoProductList = async (
  product: string
): Promise<Product[]> => {

  const url = `https://www.alkosto.com/search/?text=${fixText(product, "%2520")}`;

  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();

  await page.goto(url);

  const products: Product[] = [];

  await page.waitForSelector('div.product__list__wrapper');

  await page.evaluate(() => {
    const element = document.querySelector(
      '.product__list__wrapper'
    );

    console.log(element);

    const productList = element?.getElementsByTagName("li");

    console.log(productList);
  });

  await browser.close();

  return products;
  
};