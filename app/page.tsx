'use client';
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { useSession } from "next-auth/react";
import Image from "next/image";
import wedding from "@/public/images/wedding.png";
import HeavyComponent from "./components/HeavyComponent";
//to manipulate the objects, array which has a methods of sorting, filtering etc.
// import HeavyComponent from "./components/HeavyComponent";
// import { authOptions}  from "@/auth";
// to dynamically render the component, to implement lazy loading 
// import dynamic from 'next/dynamic';
//removing this heavycomponent because it's going to replace with loadash module.
// const HeavyComponent = dynamic(()=> import('./components/HeavyComponent'), {ssr:false, loading:()=> <p>Loading...</p>},);
//don't need this anymore because of lodash.module 
export default function Home() {
  return (
    <main>
      {/* <h1>Hello, {session && <span>{session.user!.name}</span> }</h1>  */}
      <h1 className="font-mono">Hello World!</h1>
      <HeavyComponent/>
      <Link className="font-mono font-bold text-3xl" href="/users">Users</Link>
      <ProductCard />
      {/* image optimization */}
      {/* local image */}
      {/* <Image src={wedding} alt="wedding" /> */}
      {/* remote images or patterns */}
      {/* <Image src="https://bit.ly/react-cover" fill className='object-cover' 
      sizes="(max-width:760px) 100vw, (max-width:1200px) 50vw, 33vw"/> alt="placeholder" /> */}
    </main>
  );
}
