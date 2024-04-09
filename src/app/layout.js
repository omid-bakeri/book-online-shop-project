import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Register from "./Register/page";

const roboto = Inter({ subsets: ["latin"] , weight : ['100', '300', '400', '500', '700', '900']});

export const metadata = {
  title: "Online Book Shop",
  description: "Online Book Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <div className="max-w-[77.5%] mx-auto"> 
      <Header/>
      </div>
        <main className="max-w-6xl mx-auto">
          
        {children}
        
        </main>
        <Footer/>
      </body>
    </html>
  );
}
