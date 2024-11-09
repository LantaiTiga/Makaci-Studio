import Hero from "./component/ui/Hero";
import Partner from "./component/ui/Partner";
import { Navbar } from "./component/ui/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Hero/>
        <Partner/>
        {children}
      </body>
    </html>
  );
}
