import { useSelector } from "react-redux";
import Navbar from "../ui/Navbar";
import { RootState } from "@/app/store";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

const CartPage = () => {

    const cart = useSelector((state: RootState) => state.cart.items);

    return (
        <main className="">
            <Navbar navTitle={"Keranjang-Ku"} />
            <main className="pt-24 grid lg:grid-cols-1 lg:gap-5 lg:px-10">
                {cart.map((a) => (
                    <Card>
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
                                    <Trash2 className="cursor-pointer" color="#ff0000" strokeWidth={1.5} />
                                </div>
                                <div className="gap-2 flex">
                                    <Button className="text-sm" size='sm'>-</Button>
                                    <span>{a.quantity}</span>
                                    <Button className="text-sm" size='sm'>+</Button>
                                </div>
                                <div className="flex gap-2">
                                    <Button size='sm'>Checkout</Button>
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