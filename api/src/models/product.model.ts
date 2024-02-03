export interface Product {
    title: string;
    price: number;
    image: string | undefined;
    link: string | undefined;
    freeShipping: boolean;
    stars: number;
}