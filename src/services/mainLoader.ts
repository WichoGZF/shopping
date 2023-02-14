import Category from "components/categories/Category";
import Product from "components/product/Product";

const urlLimitProducts: string = 'https://fakestoreapi.com/products?limit=8'
const urlCategories: string = 'https://fakestoreapi.com/products/categories'

export default async function mainLoader(){
    try {
        const responses = await Promise.all([fetch(urlLimitProducts), fetch(urlCategories)])

        const limitProductsData = await responses[0].json();
        const categoriesData = await responses[1].json();

        return {
            initialProducts: limitProductsData,
            categories: categoriesData,
        }
    }
    catch {
        console.log('Error occurred, couldnt fetch data.');
        return null;
    }
}