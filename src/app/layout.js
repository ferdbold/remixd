import "./globals.scss";

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
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link
        href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"/>
    </head>
    <body className={`bg-green-300/25 font-serif antialiased max-w-screen max-h-screen`}>
    {true && <div className="absolute w-screen h-screen overflow-x-hidden overflow-y-hidden z-10 particle-container">
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
