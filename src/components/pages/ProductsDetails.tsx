import { useGetProductsByIdQuery } from "@/app/services/api";
import { useParams } from "react-router";
import { Badge } from "../ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "../ui/button";
import Navbar from "../ui/Navbar";

const ProductsDetails = () => {

    const { id } = useParams()
    const parseId = id ? parseInt(id, 10) : undefined
    const { data, isLoading, error } = useGetProductsByIdQuery(parseId as number)

if (isLoading) return <div className="text-3xl text-white">Loading</div>;
if (error) return <div className="text-3xl text-white">Error</div>

    return (
        <main>
            <a href="/"><Navbar navTitle={"Toku-Ku"} /></a>
            <main className="text-white grid grid-cols-2 gap-5 px-10 pt-16 py-10 h-screen">
                <section className="flex items-center justify-center bg-white rounded-lg">
                    <img className="w-[400px] h-[400px] fixed" src={data?.image} alt={data?.title} />
                </section>

                <section className="h-full space-y-5">
                    <header>
                        <Badge className="bg-white text-black">{data?.category}</Badge>
                        <h1 className="text-3xl font-semibold pt-3 pb-1">{data?.title}</h1>
                        <h2 className="text-2xl">${data?.price}</h2>
                    </header>
                    <div className="flex items-center justify-between space-x-5">
                        <div className="flex space-x-5">
                            <span className="flex items-center gap-1">
                                <Star fill="white" strokeWidth={1} size={20} />
                                {data?.rating.rate}
                            </span>
                                <span className="flex items-center gap-1">
                                <ShoppingBag fill="" strokeWidth={1} size={20}/>
                                {data?.rating.count}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button className="cursor-pointer hover:bg-gray-800">Add to Cart</Button>
                            <Button className="cursor-pointer hover:bg-gray-800">Buy Now</Button>
                        </div>
                    </div>
                    <main className="">
                        <span className="">Description :</span>
                        <p className="pt-1">{data?.description}</p>
                    </main>
                </section>
            </main>
        </main>
    )
};

export default ProductsDetails;