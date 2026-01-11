import About from "@/features/home/About";
import BestProduct from "@/features/home/BestProduct";
import Blogs from "@/features/home/Blogs";
import Herosection from "@/features/home/Herosection";
import Newsletter from "@/features/home/Newsletter";
import Reviews from "@/features/home/Reviews";
import Whychoose from "@/features/home/Whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection></Herosection>
      <Whychoose></Whychoose>
      <BestProduct></BestProduct>
      <About></About>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Newsletter></Newsletter>
    </div>
  );
}
