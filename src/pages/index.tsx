import { Inter } from "next/font/google";
import { HeaderCompact, HelloWord, Intro } from "@theartcode/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col ${inter.className}`}
    >
      <div className="header-container">
      <HeaderCompact />
      <Intro />
      </div>
      <HelloWord />
    </main>
  );
}
