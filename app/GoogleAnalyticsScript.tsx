import React from 'react'
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2JH39YH4P9"/>
    <Script>
      {`window.dataLayer
       = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-2JH39YH4P9');`}
    </Script>
    </>

  )
}

export default GoogleAnalyticsScript