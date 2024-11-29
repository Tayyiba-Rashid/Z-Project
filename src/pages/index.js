import Hero from "@/components/01_Hero";
import RealEstate from "@/components/02_RealEstate";
import Categories from "@/components/03_Categories";
import Tickets from "@/components/04_Tickets";
import Personalise from "@/components/05_Personalise";
import GlobalVision from "@/components/06_GlobalVision";
import ZimoPartners from "@/components/07_ZimoPartners";
import Yacht from "@/components/08_Yacht";
import { useRef } from "react";

export default function Home() {

  const realEstateRef = useRef(null)
  const CategoriesRef = useRef(null)
  return (
   <>
   

   <Hero scrollToRealEstate={realEstateRef}/>
   <div
   ref={realEstateRef}>
   <RealEstate scrollToCategories={CategoriesRef}/>
   </div>
   <div
   ref={CategoriesRef}>
   <Categories />
   </div>
   <Tickets />
   <Personalise />
   <GlobalVision />
   <ZimoPartners />
   <Yacht />
  
   
   </>
  );
}
