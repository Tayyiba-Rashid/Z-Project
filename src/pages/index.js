import Page01 from "@/components/01_Page";
import Page02 from "@/components/02_Page";
import Page03 from "@/components/03_Page";
import Page04 from "@/components/04_Page";
import Page05 from "@/components/05_Page";
import Page06 from "@/components/06_Page";
import Page07 from "@/components/07_Page";
import Page08 from "@/components/08_Page";
import { useRef } from "react";

export default function Home() {

  const page02ref = useRef(null)
  const page03ref = useRef(null)
  return (
   <>
   

   <Page01 scrollToPage02={page02ref}/>
   <div
   ref={page02ref}>
   <Page02 scrollToPage03={page03ref}/>
   </div>
   <div
   ref={page03ref}>
   <Page03 />
   </div>
   <Page04 />
   <Page05 />
   <Page06 />
   <Page07 />
   <Page08 />
  
   
   </>
  );
}
