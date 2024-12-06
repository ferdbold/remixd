import StockChart from "@/app/components/stockChart";
import NewsTicker from "@/app/components/newsTicker";

const Home = () => {
  let tickerElements = ['première news', 'deuxième news', 'troisième news'];

  return (
    <div className={"flex flex-col h-screen bg-slate-900 text-lime-500"}>
      <header className={"my-4"}>
        <h1 className={"text-6xl font-bold text-center"}>REMIXD</h1>
        <h2 className={"italic text-sm text-center"}>Real Equity Maximum Income eXchange Department</h2>
      </header>

      <StockChart />
      <NewsTicker />
    </div>
  );
}
export default Home;
