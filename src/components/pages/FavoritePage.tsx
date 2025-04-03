import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import Navbar from "../ui/Navbar";
import { Card } from "../ui/card";

const FavoritePage = () => {

    const favorite = useSelector((state: RootState) => state.favorite.items);

    return (
        <main>
            <section>
                <Navbar navTitle="Favorite-Ku"></Navbar>
            </section>

            <section className="px-10 pt-20">
                <main className="grid lg:grid-cols-5 gap-5">
                    {favorite.map((fav) => (
                        <Card key={fav.id} className="py-4 px-4 gap-2 items-center max-w-52">
                            <div><img className="w-32 h-32" src={fav.image} alt={fav.title} /></div>
                            <div className="text-xs text-center font-bold">{fav.title}</div>
                            <div>${fav.price}</div>
                        </Card>
                    ))}
                </main>
            </section>
        </main>
    )
}

export default FavoritePage;