import React, { ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import clsx from "clsx";
interface Navbar {
    navTitle: string;
    input?: ReactNode;
    children?: ReactNode;
    className?: string;
}
 
const Navbar: React.FC<Navbar> = ({ navTitle, input, children, className }) => {

    return (
        <nav className={clsx('text-white flex flex-col lg:flex-row justify-between lg:justify-between h-36 lg:h-14 items-center py-2 w-full px-5 lg:px-20 fixed z-50', className)}>
            <Link to={"/"}>
                <div className="flex items-center gap-1 font-semibold cursor-pointer">
                <ShoppingBag size={24} color="#ffffff" strokeWidth={1.5} />    
                {navTitle}
                </div>
            </Link>
            <div className="g:pr-0 lg:w-[60vw]">
                {input}
            </div>
            <div className="flex space-x-4">
                {children}
            </div>
        </nav>
    )
};

export default Navbar;