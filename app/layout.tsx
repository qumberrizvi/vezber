import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Vezber - Hire world's best remote talents",
  description:
    "A platform that enables businesses to hire effectively and 10 times more quickly from all over the world. A talent pool that has been screened for technical expertise, language ability, and behavioral traits.",
  twitter: {
    card: "summary_large_image",
    title: "Vezber - Hire world's best remote talents",
    description:
      "A platform that enables businesses to hire effectively and 10 times more quickly from all over the world. A talent pool that has been screened for technical expertise, language ability, and behavioral traits.",
    creator: "@vezber.com",
  },
  metadataBase: new URL("https://vezber.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
        <Analytics />
      </body>
    </html>
  );
}
