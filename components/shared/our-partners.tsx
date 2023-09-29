import Image from 'next/image'

export default function OurPartner() {
    return (
        <>
            <div className="flex justify-center space-x-4 items-center">
                <div className="p-4">
                    <Image
                        src="partners/aws.svg"
                        alt="Vezber Logo"
                        className="h-20 w-20"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="p-4">
                    <Image
                        src="partners/google_cloud.svg"
                        alt="Vezber Logo"
                        className="h-40 w-40"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="p-4">
                    <Image
                        src="partners/apple.svg"
                        alt="Vezber Logo"
                        className="h-20 w-20"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="p-4">
                    <Image
                        src="partners/microsoft_azure.svg"
                        alt="Vezber Logo"
                        className="h-20 w-20"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="p-4">
                    <Image
                        src="partners/sophos.svg"
                        alt="Vezber Logo"
                        className="h-20 w-20"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="p-4">
                    <Image
                        src="partners/salesforce.svg"
                        alt="Vezber Logo"
                        className="h-20 w-20"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </>
    );
}
