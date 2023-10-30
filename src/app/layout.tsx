// app/layout.tsx
import { Providers } from "../app/providers";
import Sidebar from "./components/Sidebar";
import Footer from "../app/components/Footer"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
         <Sidebar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

