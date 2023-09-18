'use client'

import Script from "next/script";

export function Chat() {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src="https://embed.tawk.to/6504e6afb1aaa13b7a771d8f/1hadia8fa"
            />
        </>
    );
}

