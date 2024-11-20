/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { motion, useInView } from "framer-motion";
import FirstSection from "components/Main/1Section";
import SecondSection from "components/Main/2Section";
import ThirdSection from "components/Main/3Section";
import ForthSection from "components/Main/4Section";
import FifthSection from "components/Main/5Section";



// function FadeInWhenVisible({ children }) {
//   return (
//     <motion.div
//       style={{ outline: "1px solid red" }} // Debugging visibility
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.5 }}
//       transition={{ duration: 0.5 }}
//       variants={{
//         visible: { opacity: 1, scale: 1 },
//         hidden: { opacity: 0, scale: 0 },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
       <FirstSection />
       <SecondSection />
       <ThirdSection />
       <ForthSection />
       <FifthSection />
        <Footer />
    </>
  );
}
