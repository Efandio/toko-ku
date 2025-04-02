import { useGetProductsByIdQuery } from "@/app/services/api";
import { CreditCard, Package, ShoppingCart } from "lucide-react";
import { Link, useLocation, useParams } from "react-router";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { useState } from "react";
import { toast } from "sonner";

const CheckoutPage = () => {

    const { id } = useParams();
    const parseId = id ? parseInt(id, 10) : null;
    
    const { data, isLoading, error } = useGetProductsByIdQuery(parseId as number);

    const [activePayment, setActivePayment] = useState<'cod' | 'creditCard' | ''>('');

    const handleActive = (method: 'cod' | 'creditCard') => {
        setActivePayment(method);
        toast(`Selected Method : ${method === 'cod' ? 'COD' : 'Credit Card'}`);
    };

    const location = useLocation();
    const productsQuantity = location.state;

    if (isLoading) return <div className="text-white text-3xl">Loading...</div>;
    if (error) return <div className="text-red-500 text-3xl">Error</div>

    return (
        <main>
            <Link className="flex px-10 items-center w-fit" to={"/cart"}>
                <ShoppingCart size={24} color="#ffffff" strokeWidth={2} />
                <h3 className="text-white font-medium">Back to cart</h3>
            </Link>

            <section className="text-white grid lg:grid-cols-2 gap-8 px-10 pt-16 py-10 h-screen justify-center items-center">
                <section className="flex items-center justify-center bg-white rounded-lg h-80 px-10 gap-5">
                    <img className="lg:w-[200px] lg:h-[200px] w-[50px] h-[50px]" src={data?.image} alt={data?.title} />
                    <div className="text-black">
                        <h1 className="font-medium">{data?.title}</h1>
                        <p>Quantity : {productsQuantity}</p>
                    </div>
                </section>

                <section className="h-full space-y-5">
                    <div>
                        <Badge className="text-[15px] px-4">Detail Pembayaran</Badge>
                    </div>
                    <div>
                        <form className="flex flex-col" action="">
                            <div className="flex flex-col">
                                <label htmlFor="">Nama</label>
                                <Input />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Alamat</label>
                                <Input />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Pilih Metode Pembayaran</label>
                                <div className="flex gap-4">
                                    <Card onClick={() => handleActive('cod')} className={`max-w-56 max-h-44 px-5 py-2 flex cursor-pointer ${activePayment === 'cod' ? 'bg-black text-white' : ''}`}>
                                        <Package strokeWidth={1.75} />
                                        <p>Cash On Delivery (COD)</p>
                                    </Card>
                                    <Card onClick={() => handleActive('creditCard')} className={`max-w-56 max-h-44 px-5 py-2 flex cursor-pointer ${activePayment === 'creditCard' ? 'bg-black text-white' : ''}`}>
                                        <CreditCard strokeWidth={1.75} />
                                        <p>Credit Card</p>
                                    </Card>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </main>
    )
};

export default CheckoutPage;