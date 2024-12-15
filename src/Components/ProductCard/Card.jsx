"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../Data/data";
import { GridLoader } from "react-spinners";

const Card = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["todos"],
        queryFn: getProducts,
    });


    if (isLoading) return <div className="text-center"><GridLoader color="#36D2B4"/></div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div className="grid grid-cols-3 items-center gap-4">
            {
                data.record.map((product) => <div key={product.id} className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                    <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Product Name</h1>
                        <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
                        <div className="text-lg font-semibold">$99.99</div>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
                        <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Card