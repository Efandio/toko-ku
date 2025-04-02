export interface ProductsType extends cartProductsType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
};

export interface cartProductsType {
    quantity: number;
};