import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import Navbar from "../ui/Navbar";
import { Input } from "../ui/input";
import { Card, CardContent, CardTitle } from "../ui/card";
import { NavLink, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { ShoppingCart, Star } from "lucide-react";

const MainPage = () => {

    const data = useSelector((state: RootState) => state.products.items)
    const navigate = useNavigate()

    function randomProducts(products: typeof data, count: number) {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    function limitTitle(title: string) {
        return title.length > 25 ? title.slice(0, 15) + '...' : title
    };


    return (
        <main className="px-10">
            <Navbar navTitle={"Toku-Ku"} input={<Input placeholder="Search" />}>
                <NavLink to={'cart'}>
                    { ({ isActive }: { isActive: boolean }) => (
                    <Button className="cursor-pointer hover:bg-gray-800">
                        <ShoppingCart color="#ffffff" className={isActive ? 'fill-white' : 'fill-none'} strokeWidth={1.5} />
                        Cart
                    </Button>
                    ) }
                </NavLink>
                <NavLink to={'favorite'}>
                    <Button className="cursor-pointer hover:bg-gray-800">
                        <Star color="#ffffff" strokeWidth={1.5} />
                        Favorite
                    </Button>
                </NavLink>
            </Navbar>

            <section className="grid grid-cols-5 gap-5 pt-20">
                {randomProducts(data, data.length).map((a) => (
                    <Card onClick={() => {navigate(`/details/${a.id}`)}} key={a.id} className="py-4">
                        <CardContent className="space-y-5">
                            <div>
                                <img className="w-40 h-40 cursor-pointer" src={a.image} alt={a.title} />
                            </div>
                            <CardTitle className="space-y-1">
                                <h1 className="cursor-pointer">{limitTitle(a.title)}</h1>
                                <h3>${a.price}</h3>
                            </CardTitle>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    )
};

export default MainPage;