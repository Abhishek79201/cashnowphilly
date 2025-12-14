import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Sell Your Home Fast | Cash Now Philly',
  description: 'Need to sell your home fast? Get a fair cash offer in 24 hours. No repairs, no fees, no commissions. We buy houses in any condition.',
  keywords: 'sell house fast, cash home buyers, we buy houses, sell house as-is, Philadelphia home buyers',
  openGraph: {
    title: 'Sell Your Home Fast | Cash Now Philly',
    description: 'Need to sell your home fast? Get a fair cash offer in 24 hours. No repairs, no fees, no commissions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cash Now Philly',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cash Now Philly - We Buy Houses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Home Fast | Cash Now Philly',
    description: 'Need to sell your home fast? Get a fair cash offer in 24 hours.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const vwoAccountId = process.env.NEXT_PUBLIC_VWO_ACCOUNT_ID

  return (
    <html lang="en">
      <head>
        {vwoAccountId && (
          <Script
            id="vwo-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window._vwo_code = window._vwo_code || (function(){
var account_id=${vwoAccountId},
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.fetchPriority='high';b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){
window.settings_timer=setTimeout(function () {_vwo_code.finish() },settings_tolerance);var a=d.createElement('style'),b=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+(+is_spa)+'&r='+Math.random());return settings_timer; }};window._vwo_settings_timer = code.init(); return code; }());
              `,
            }}
          />
        )}
      </head>
      <body>
        {gtmId && (
          <>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />
          </>
        )}
        {children}
        <Script
          id="google-ads"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
            `,
          }}
        />
      </body>
    </html>
  )
}

