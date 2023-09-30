import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import {ReactNode, Suspense} from "react";
import {Chat} from "@/components/layout/chat";
import {GoogleAnalytics} from "@/components/layout/google-analytics";

export const metadata = {
  title: "Vezber - Where technology meets imagination",
  description:
    "Cutting edge software solutions, cloud mastery, and unparalleled IT services. We fuel your growth and conquer challenges!",
  twitter: {
    card: "summary_large_image",
    title: "Vezber - Where technology meets imagination",
    description:
      "Cutting edge software solutions, cloud mastery, and unparalleled IT services. We fuel your growth and conquer challenges!",
    creator: "@vezber.com",
  },
  metadataBase: new URL("https://vezber.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Chat />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
