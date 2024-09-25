import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/typography.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner"
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

const calsans = localFont({
  src: [
    {
      path: "../../public/fonts/CalSans-SemiBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "Job Portal",
  description: "A job portal for job seekers and employers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${calsans.variable}`}>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme={"light"}
        >
          <SessionProvider>

            {children}
          </SessionProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
