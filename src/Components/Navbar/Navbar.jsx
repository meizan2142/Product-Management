'use client'
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div>
                <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                        <h2>Next App</h2>
                    </div>
                </nav>
            </div>
            {/* drawer */}
            <div>
                <div className="relative">
                    {/* Button to open the drawer */}
                    <button
                        className=" fixed top-2 z-50 right-5"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="relative w-fit">
                            <PiShoppingCartSimpleFill size={30} color="" />
                            <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-md bg-red-700 text-center text-[10px] text-white">12</span>
                        </div>
                    </button>

                    {/* Overlay */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}

                    {/* Drawer */}
                    <div
                        className={`fixed top-0 left-0 h-full bg-black shadow-lg transform ${isOpen ? "translate-x-0 lg:w-[600px]" : "-translate-x-full"
                            } transition-transform duration-300 ease-in-out z-50 w-64`}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-2xl font-black text-white">Your Cart</h2>
                            <button
                                className="text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-10">
                                <div className="border w-24 h-20">
                                    <img className="object-cover w-full h-full" src="https://i.ibb.co.com/pzvcQ7h/Store-Jersey-Black-Front.webp" alt="" />
                                </div>
                                <div className="flex flex-col justify-start space-y-2">
                                    <h3 className="text-base text-white font-bold">Sentinels Limited Edition Blackout Jersey - $75.00</h3>
                                    <p className="text-sm text-gray-400">Small / Bang</p>
                                    <div className="border justify-between border-gray-500 w-24 h-6 flex items-center py-4">
                                        <div className="border border-gray-500 border-t-0 border-l-0 border-r-0 border-b-0 px-1 py-1 text-sm">
                                            <button>-</button>
                                        </div>
                                        <div className="border border-gray-500  border-t-0  border-b-0 px-3 py-1 text-sm">
                                            <button>2</button>
                                        </div>
                                        <div className="border border-gray-500 border-t-0 border-l-0 border-r-0 border-b-0 px-1 py-1 text-sm">
                                            <button>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <RiDeleteBin5Line color="red" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar