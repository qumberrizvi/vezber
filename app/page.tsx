import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Card from "@/components/shared/card";
import OurPartner from "@/components/shared/our-partners";

export default async function Home() {

  return (
    <>
        <div className="h-[80vh] flex">
            <div className="z-10 w-full max-w-xl px-5 xl:px-0 m-auto">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <Balancer>Where technology meets imagination</Balancer>
                </h1>
                <p
                    className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                    <Balancer>
                        Cutting edge software solutions, cloud mastery, and unparalleled IT services. We fuel your growth and conquer challenges!
                    </Balancer>
                </p>
                <div
                    className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                >
                    <Link
                        className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                        href={'/contact'}
                    >
                        <p>Start a Project</p>
                    </Link>
                    {/*<Link*/}
                    {/*  className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"*/}
                    {/*  href={'/contact'}*/}
                    {/*>*/}
                    {/*  <p>Ask a Question</p>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>


        <div className="my-10 w-full max-w-screen-xl animate-fade-up px-5 md:grid-cols-3 xl:px-0 relative bottom-0">
            <h1
                className="py-5 animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-lg font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem]"
                style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
            >
                Our Sponsors
            </h1>
            <OurPartner></OurPartner>
        </div>
    </>
  );
}
