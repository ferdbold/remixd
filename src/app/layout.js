import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "REMIXD",
  description: "Real Equity Maximum Income eXchange Department",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/jpg" href="favicon.jpg"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
