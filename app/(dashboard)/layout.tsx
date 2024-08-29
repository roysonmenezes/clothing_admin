import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import LeftSideBar from "@/components/layout/LeftsideBar";
import TopBar from "@/components/layout/TopBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing Admin Dashboard",
  description: "Admin panel to manage clothing products and sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <div className="h-screen flex justify-center items-center">
              <SignIn routing="hash"/>
            </div>  
          </SignedOut>
          {/* <SignedIn>
            <UserButton /> 
          </SignedIn> */}
          <div className="flex max-lg:flex-col text-grey-1">
            <LeftSideBar />
            <TopBar />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
