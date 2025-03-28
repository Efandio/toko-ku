import { useGetProductsByIdQuery } from "@/app/services/api";
import { useParams } from "react-router";

const ProductsDetails = () => {

    const { id } = useParams()
    const parseId = id ? parseInt(id, 10) : undefined
    const { data, isLoading, error } = useGetProductsByIdQuery(parseId as number)

if (isLoading) return <div className="text-3xl text-white">Loading</div>;
if (error) return <div className="text-3xl text-white">Error</div>

    return (
        <main>
            {data?.image}
            {data?.title}
        </main>
    )
};

export default ProductsDetails;