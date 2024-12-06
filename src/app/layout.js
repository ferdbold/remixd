import localFont from "next/font/local";
import "./globals.scss";

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
  title: "REMI.XD",
  description: "Real Equity Maximum Income eXchange Department",
};

const RootLayout = ({ children }) => {
  const showEgg = new Date().getTime() >= new Date("December 6, 2024 19:00:00").getTime();
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/jpg" href="favicon.jpg"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 antialiased max-w-screen max-h-screen`}>
        {showEgg && <div className="absolute w-screen h-screen overflow-x-hidden overflow-y-hidden z-10 particle-container">
          {[...Array(30)].map((e, i) =>
            <div key={i} className="particles">
              <span className="circle"></span>
            </div>
          )}
        </div>}
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  );
}
export default RootLayout;
