import React, { ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
interface Navbar {
    navTitle: string;
    input?: ReactNode;
    children?: ReactNode;
    className?: string;
}
 
const Navbar: React.FC<Navbar> = ({ navTitle, input, children, className }) => {

    return (
        <nav className={`text-white flex justify-between items-center py-2 w-full px-20 fixed z-50 ${className}`}>
            <Link to={"/"}>
                <div className="flex items-center gap-1 font-semibold cursor-pointer">
                <ShoppingBag size={24} color="#ffffff" strokeWidth={1.5} />    
                {navTitle}
                </div>
            </Link>
            <div>
                {input}
            </div>
            <div className="flex space-x-4">
                {children}
            </div>
        </nav>
    )
};

export default Navbar;