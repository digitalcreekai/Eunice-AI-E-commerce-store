import Script from "next/script";

export const metadata = {
  title: "SheSlay — Beauty, Style & You",
  description: "Discover fashion and beauty favourites at SheSlay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fff9f5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Allura&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
