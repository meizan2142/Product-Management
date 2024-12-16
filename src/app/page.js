"use client";
import Navbar from "@/Components/Navbar/Navbar";
import Pagination from "@/Components/pagination/Pagination";
import Card from "@/Components/ProductCard/Card";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-[1196px] mx-auto mt-20">
        <Card />
      </div>
      <div className="w-[1196px] mx-auto mt-20">
        <Pagination/>
      </div>
    </div>
  );
}
