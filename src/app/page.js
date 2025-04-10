"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import InaugurationProgram from "./components/InagurationProgram";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // clean up on unmount
    };
  }, []);

  return (
    <div className="bg-white h-full overflow-x-hidden relative">
      <InaugurationProgram />
      
    </div>
  );
}
