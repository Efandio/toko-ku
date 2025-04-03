import { useGetProductsByIdQuery } from "@/app/services/api";
import { useParams } from "react-router";
import { Badge } from "../ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "../ui/button";
import Navbar from "../ui/Navbar";
import { setCart } from "@/app/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { RootState } from "@/app/store";
import { useState } from "react";
import { setFavoriteItems, removeFavoriteItems } from "@/app/slice/favoriteSlice";

const ProductsDetails = () => {

    const { id } = useParams();
    const parseId = id ? parseInt(id, 10) : null
    const dispatch = useDispatch();

    const { data, isLoading, error } = useGetProductsByIdQuery(parseId as number);
    const dataCart = useSelector((state: RootState) => state.cart.items);

    const [isFavorite, setIsFavorite] = useState<boolean>(true);
    const [favorite, setFavorite] = useState<string>('');

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            setFavorite('yellow');
            toast('added to favorite');
            // check data for adding items to favorite
            if (data) {
                dispatch(
                    setFavoriteItems({
                        id: data.id,
                        title: data.title,
                        image: data.image,
                        price: data.price,
                    })
                )
            };
        } else {
            setFavorite('');
            toast('remove from favorite')
            // same, but this for remove
            if (data) {
                dispatch(
                    removeFavoriteItems(data.id)
                )
            };
        }
    };
    

    const handleAddToCart = () => {
        if (data) {
            dispatch(
                setCart({
                    id: data.id,
                    image: data.image,
                    title: data.title,
                    price: data.price,
                    quantity: 1
                })
            )
            const totalQuantity = dataCart.reduce((sum, item) => sum + item.quantity, 0);
            toast('Item added to cart', {
            description: `Total items: ${totalQuantity + 1}`
        });
        } else {
            toast('Adding failed')
        }
    };




if (isLoading) return <div className="text-3xl text-white">Loading</div>;
if (error) return <div className="text-3xl text-white">Error</div>

    return (
        <main className="mt-32 lg:mt-0">
            <Navbar navTitle={"Toku-Ku"}>
                
            </Navbar>
            <main className="text-white grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 pt-16 py-10 h-screen">
                <section className="flex items-center justify-center bg-white rounded-lg">
                    <img className="lg:w-[400px] lg:h-[400px] fixed" src={data?.image} alt={data?.title} />
                </section>

                <section className="h-full space-y-5">
                    <header>
                        <div className="flex justify-between">
                            <Badge className="bg-white text-black">{data?.category}</Badge>
                            <Button onClick={handleFavorite} className="cursor-pointer">
                                <Star fill={favorite} strokeWidth={1.75} />
                            </Button>
                        </div>
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
                            <Button onClick={() => {
                                handleAddToCart();
                            }} className="cursor-pointer hover:bg-gray-800">Add to Cart</Button>
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