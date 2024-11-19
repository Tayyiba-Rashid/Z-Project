
import Charts from "@/components/charts";
import Header from "@/components/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
       <Header />
       <Charts />
       <Component {...pageProps} />;
   </>
  )
}
