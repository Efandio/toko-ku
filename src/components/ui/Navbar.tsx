import React from "react";
import { Button } from "./button";
import { ShoppingBag, ShoppingCart, Star } from "lucide-react";
import { Input } from "./input";

interface Navbar {
    navTitle: string;
    home?: string
}
 
const Navbar: React.FC<Navbar> = ({ navTitle, home }) => {



    return (
        <nav className="text-white flex justify-between items-center py-2 w-full px-20 fixed">
            <div className="flex items-center gap-1 font-semibold cursor-pointer">
                <ShoppingBag size={24} color="#ffffff" strokeWidth={1.5} />    
                {navTitle}
            </div>
            <div>
                <Input placeholder="Search" />
            </div>
            <div className="flex space-x-4">
                <span>{home}</span>
                <Button className="cursor-pointer hover:bg-gray-800">
                    <ShoppingCart color="#ffffff" strokeWidth={1.5} />
                    Cart
                </Button>
                <Button className="cursor-pointer hover:bg-gray-800">
                    <Star color="#ffffff" strokeWidth={1.5} />
                    Favorite
                </Button>
            </div>
        </nav>
    )
};

export default Navbar;