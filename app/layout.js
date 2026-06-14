import { Outfit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Interview Mocker",
  description: "AI Powered Mock Interview Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full antialiased">
        <body className={`min-h-full flex flex-col ${outfit.className}`}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}