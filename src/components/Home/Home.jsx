import React from "react";
import Navbar from "../Navbar"
import ProductInfo from "../ProductInfo"
import Carousel from "../Carousel"
import ItemCard from "../ItemCard"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Carousel />
      <ItemCard />
    </>
  );
}
