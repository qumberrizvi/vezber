import Card from "@/components/shared/card";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import ContactForm from "@/components/shared/contact-form";

export default async function Contact() {
    return (
        <>
            <div
                className="z-10 my-10 w-full max-w-screen-xl animate-fade-up grid md:grid-cols-2 grid-cols-1 gap-5 px-5 xl:px-0">
                <div>
                    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
                        <Balancer>Get in touch</Balancer>
                    </h2>
                    <p className="my-2">Always happy to hear from you!</p>
                    <div className="my-8">
                        <p className="mt-3 mb-5">
                            For <strong>business collaborations</strong> and quotes, reach out at <Link
                            href="mailto:business@vezber.com"><u>business@vezber.com</u></Link>
                        </p>
                        <p className="mt-3 mb-5">
                            To contact our <strong>technical support</strong> team, message us at <Link
                            href="mailto:support@vezber.com">
                            <u>support@vezber.com</u></Link>
                        </p>
                        <p className="mt-3 mb-5">
                            Just want to say <strong>hello</strong>? Drop an email at <Link
                            href="mailto:hello@vezber.com"><u>hello@vezber.com</u></Link>
                        </p>
                        <p className="mt-3 mb-5">
                            To reach us on <strong>phone</strong>, dial <Link
                            href="tel:+919403890690"><u>+91 94038 90690</u></Link>
                        </p>
                    </div>
                </div>
                <div>
                    <Card>
                        <div className="w-full p-5">
                            <ContactForm/>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
