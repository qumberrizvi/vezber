'use client'

import Script from "next/script";

export function Chat() {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src="/js/tawk.js"
            />
        </>
    );
}

