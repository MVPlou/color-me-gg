// app/layout.tsx
import { Providers } from "../app/providers";
import Sidebar from "./components/Sidebar";




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
        </Providers>
      </body>
    </html>
  );
}

