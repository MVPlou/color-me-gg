// app/layout.tsx
import { Providers } from "../app/providers";
import Sidebar from "./components/Sidebar";
import GoogleAnalytics from "../app/GoogleAnalytics";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <Providers>
         <Sidebar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}

