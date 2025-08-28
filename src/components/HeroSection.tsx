import Link from "next/link";
import { Button } from "./ui/moving-border";

 import { cn } from "@/utils/lib/utils";
import { Spotlight } from "./ui/Spotlight";
function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    
      <div 
      className="p-4 relative z-10 w-full text-center">
        <Spotlight 
        //className="animate-spotlight animation-delay-[0.75s] pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%]"
         className="absolute left-[40%] -top-80 pointer-events-none z-[1] animate-spotlight h-[220%] w-[180%] lg:w-[140%] -translate-x-1/2" 
        fill="white"
      />
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
           >Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore courses
      </Button>
                    
                  
                </Link>
            </div>
           
        </div>
    </div>
  )
}


export default HeroSection