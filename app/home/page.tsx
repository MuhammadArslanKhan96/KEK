import Tokens from "@/components/uniswap/first";
import Chart from "@/components/uniswap/second";

export default function HomePage() {
  return (
    <div className="flex h-full min-h-screen flex-col items-center bg-[rgb(34,36,42)] p-3">
      <Tokens />
      <Chart />
    </div>
  );
}
