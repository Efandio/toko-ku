import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setProducts } from "../app/slice/productsSlice"
import { useGetProductsQuery } from "./services/api";

const ProductsFetcher = () => {

    const { data, isLoading, error } = useGetProductsQuery()

    const dispatch = useDispatch();

    
    useEffect(() => {
        if (data) {
            dispatch(setProducts(data));
        }
    }, [data, dispatch]);


    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error</div>

    return null;
};

export default ProductsFetcher