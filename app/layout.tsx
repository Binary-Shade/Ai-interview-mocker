import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
  display: "swap", // Optional: improves font loading performance
});

export const metadata: Metadata = {
  title: "AI Interview",
  description: "AI powered interview app",
  // Recommended to add these for better SEO
  // metadataBase: new URL("https://yourdomain.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Interview",
    description: "AI powered interview app",
    // url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "AI Interview",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-black text-white">
      <body className={`${poppins.className} antialiased pattern `}>
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </body>
    </html>
  );
}