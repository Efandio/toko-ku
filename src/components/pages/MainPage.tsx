import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import Navbar from "../ui/Navbar";

const MainPage = () => {

    const data = useSelector((state: RootState) => state.products.items)


    return (
        <main>
            <Navbar navTitle={"Toku-Ku"} />
        </main>
    )
};

export default MainPage;