
// import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
     <h1>Hello, World!</h1>
     {/* <a href="/users">Users</a> */}
    <Link href="/users">Users</Link>
    <ProductCard/>
    </>
   
  );
}
