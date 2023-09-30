import Script from "next/script";

export function GoogleAnalytics() {
    return (
        <div className="container">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-TVXKKN9GWM"></Script>
            <Script strategy="afterInteractive" id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-TVXKKN9GWM');
                `}
            </Script>
        </div>
    );
}
