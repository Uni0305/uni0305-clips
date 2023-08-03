import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.8/variable/pretendardvariable.css"
        />
      </head>
      <body>
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
