import StockChart from "@/app/components/stockChart";

const Home = () => {
  return (
    <div className={"flex flex-col h-screen bg-slate-900 text-lime-500"}>
      <header className={"my-4"}>
        <h1 className={"text-6xl font-bold text-center"}>REMIXD</h1>
        <h2 className={"italic text-sm text-center"}>Real Equity Maximum Income eXchange Department</h2>
      </header>

      <StockChart />

      <div className="bg-red-500 text-white py-1 font-bold">NEWS TICKER</div>
    </div>
  );
}
export default Home;
