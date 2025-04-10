"use client";

import InaugurationProgram from "./InagurationProgram";

// import InaugurationProgram from "./components/InagurationProgram";


export default function Home() {
  return (
    <SmoothScroller>
      <div className="bg-white h-full overflow-x-hidden relative">
        <InaugurationProgram/>
        
      </div>
    </SmoothScroller>
  );
}
