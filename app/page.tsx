<<<<<<< HEAD

// import Image from "next/image";
=======
>>>>>>> 6c8e438dc0b9e9551e4926b163c2dfdf15ac037c
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
