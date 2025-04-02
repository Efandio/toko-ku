import { useDispatch, useSelector } from "react-redux";
import Navbar from "../ui/Navbar";
import { RootState } from "@/app/store";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { removeProducts, addQuantiy, reduceQuantity } from "@/app/slice/cartSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const CartPage = () => {

    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        dispatch(removeProducts(id))
        toast('Product Deleted')
    };

    const handleIncrement = (id: number) => {
        dispatch(addQuantiy(id))
    };

    const handleDecrement = (id: number) => {
        dispatch(reduceQuantity(id))
    };

    return (
        <main className="">
            <Navbar navTitle={"Keranjang-Ku"}>
                
            </Navbar>
            <main className="pt-24 grid lg:grid-cols-1 lg:gap-5 lg:px-10">
                {cart.map((a) => (
                    <Card className="py-4" key={a.id}>
                        <CardContent className="flex justify-between">
                            <div className="flex items-center gap-4">
                                <div>
                                    <img className="w-24 h-24" src={a.image} alt={a.title} />
                                </div>
                                <div>
                                    <h1 className="font-medium">{a.title}</h1>
                                    <h2 className="text-xl">${a.price}</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <div>
                                        {/* Trash Icon */}
                                    <Trash2 onClick={() => handleDelete(a.id)} className="cursor-pointer" color="#ff0000" strokeWidth={1.5} />
                                </div>
                                <div className="gap-2 flex">
                                    <Button onClick={() => handleDecrement(a.id)} className="text-sm cursor-pointer" size='sm'>-</Button>
                                    <span>{a.quantity}</span>
                                    <Button onClick={() => handleIncrement(a.id)} className="text-sm cursor-pointer" size='sm'>+</Button>
                                </div>
                                <div className="flex gap-2">
                                    <Button onClick={() => {
                                            // for sending quanitity 
                                        navigate(`/checkout/${a.id}`, {state: a.quantity});
                                    }} size='sm'>Checkout</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </main>
        </main>
    )
}

export default CartPage;