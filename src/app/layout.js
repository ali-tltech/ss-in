import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


  
  
export const metadata = {
  title: "SWAYAMWARA SILKS || EVENT BOOKING",
  description: "Discover the elegance of traditional silk sarees and modern designs at our showroom.",
  openGraph: {
    title: 'SWAYAMWARA SILKS || EVENT BOOKING',
    description: 'Discover the elegance of traditional silk sarees and modern designs at our showroom.',
    url: 'https://ss-in.vercel.app/',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/63ba749b-0ba3-49b6-9517-c3d52358c6f2.png?token=vmcL7cQnaFxrrZ7cb4mcK_C2mOF8TKU3I_lFDGecvK4&height=617&width=1200&expires=33280293296', // place it in public folder
        width: 1200,
        height: 630,
        alt: 'OG Image Alt Text',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Toaster position="top-center" reverseOrder={false} />

        {children}
      </body>
    </html>
  );
}
