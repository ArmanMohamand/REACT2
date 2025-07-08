"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"


export default function Home() {
  const [Count, setCount] = useState(0);
   return (
   <div>
    <Navbar/>
    I am a component 
    {Count}
    <button onClick={()=> setCount(Count + 1)}>Click me</button>
   </div>
  );
}